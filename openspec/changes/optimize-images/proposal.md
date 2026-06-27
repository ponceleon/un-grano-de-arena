## Why

The 15 images in `public/images/why-donate/` are extremely large (up to 25.5 MB each, totaling ~107 MB). This causes slow page loads on both mobile and desktop, especially for users with limited bandwidth. Visitors may abandon the site before images finish loading.

## What Changes

- Batch resize and compress all 15 hero/gallery images to web-appropriate resolutions and file sizes
- Use sharp (already a dependency via Astro) to generate optimized JPEG variants at 1920px, 1200px, 800px, and 400px widths
- Keep original files as source for future re-generation
- Delete or replace the oversized originals with optimized versions

## Capabilities

### New Capabilities
- `image-optimization`: Batch script that compresses and resizes all site images to web-optimized sizes

### Modified Capabilities
- *(none — no spec-level requirement changes)*

## Impact

- `public/images/why-donate/*.jpg` — all 15 images will be replaced with optimized versions
- A new `scripts/` directory will contain the optimization script
- Development dependency: sharp (already installed via Astro)
