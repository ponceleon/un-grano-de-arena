## 1. Optimization script

- [x] 1.1 Create `scripts/` directory and `scripts/optimize-images.mjs` with sharp-based batch processor
- [x] 1.2 Implement backup logic: copy originals to `_originals/` subfolder before processing
- [x] 1.3 Implement resize pipeline: generate 1920px (replace original), 1200w, 800w, 400w variants at JPEG quality 80
- [x] 1.4 Verify script is idempotent (safe to re-run)

## 2. Run optimization

- [x] 2.1 Run the script against all 15 images in `public/images/why-donate/`
- [x] 2.2 Verify total size is under 5 MB and individual images look acceptable

## 3. Verify build

- [x] 3.1 Run `npm run build` to confirm no broken references
- [ ] 3.2 Open the site locally and confirm all images load quickly
