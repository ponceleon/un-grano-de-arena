import sharp from 'sharp';
import { readdirSync, copyFileSync, mkdirSync, existsSync, unlinkSync, statSync } from 'fs';
import { join, parse } from 'path';

const IMAGES_DIR = 'public/images/why-donate';
const BACKUP_DIR = join(IMAGES_DIR, '_originals');
const WIDTHS = [1920, 1200, 800, 400];
const QUALITY = 80;

if (!existsSync(BACKUP_DIR)) {
  mkdirSync(BACKUP_DIR, { recursive: true });
  console.log('Created backup directory:', BACKUP_DIR);
}

const files = readdirSync(IMAGES_DIR)
  .filter(f => f.endsWith('.jpg') && !f.startsWith('_'))
  .sort();

console.log(`Found ${files.length} images to optimize\n`);

for (const file of files) {
  const srcPath = join(IMAGES_DIR, file);
  const { name } = parse(file);
  const backupPath = join(BACKUP_DIR, file);

  if (!existsSync(backupPath)) {
    copyFileSync(srcPath, backupPath);
    console.log(`  Backed up: ${file}`);
  }

  const image = sharp(backupPath);
  const metadata = await image.metadata();
  const originalWidth = metadata.width;
  const mainWidth = Math.min(originalWidth, 1920);

  const widths = [...new Set([mainWidth, ...WIDTHS])]
    .filter(w => w <= originalWidth)
    .sort((a, b) => b - a);

  for (const width of widths) {
    const isMain = width === mainWidth;
    const outPath = isMain
      ? srcPath
      : join(IMAGES_DIR, `${name}@${width}w.jpg`);

    await sharp(backupPath)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: QUALITY })
      .toFile(outPath + '.tmp');

    if (existsSync(outPath)) unlinkSync(outPath);
    copyFileSync(outPath + '.tmp', outPath);
    unlinkSync(outPath + '.tmp');

    const sizeKB = (statSync(outPath).size / 1024).toFixed(1);
    console.log(`  ${file} → ${width}w${isMain ? ' (main)' : ''} (${sizeKB} KB)`);
  }
  console.log();
}

const totalSizeMB = files
  .map(f => join(IMAGES_DIR, f))
  .filter(f => !f.startsWith('_'))
  .reduce((sum, f) => sum + statSync(f).size, 0) / (1024 * 1024);

console.log(`Done! Total size: ${totalSizeMB.toFixed(2)} MB`);
