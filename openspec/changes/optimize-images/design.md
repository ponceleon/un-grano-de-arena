## Context

The site has 15 images in `public/images/why-donate/` ranging from 0.2 MB to 25.5 MB, totaling ~107 MB. The largest two (gallery-2.jpg at 25.5 MB, gallery-4.jpg at 21.8 MB) are used as hero background and gallery slides. Pages take multiple seconds to load even on fast connections.

Astro already bundles `sharp` (v0.34.4) as a transitive dependency. No additional packages are needed.

## Goals / Non-Goals

**Goals:**
- Reduce total image payload from ~107 MB to under 5 MB
- Generate responsive image variants for each source image
- Keep image quality acceptable at 80-85% JPEG quality
- Keep original files intact as source of truth in a dedicated folder

**Non-Goals:**
- Automate optimization in the build pipeline (post-build script is sufficient)
- Convert to WebP or AVIF (would require markup changes; defer to future)
- Optimize images outside of `public/images/why-donate/`

## Decisions

1. **sharp over GUI tools** — Already installed via Astro. Scriptable, deterministic, and fast. No new dependencies.

2. **Generate 4 widths (400, 800, 1200, 1920)** — Covers mobile through retina desktop. The `<img>` / CSS `background-image` will point to the 1920px variant; the smaller variants are available for future `<picture>` / `srcset` usage.

3. **Replace originals in-place** — Simpler than changing all image references. The optimized 1920px variant overwrites the original file. Smaller variants go alongside (e.g., `gallery-2@800w.jpg`).

4. **JPEG quality 80%** — Good balance of visual fidelity vs file size. Large smooth areas (sky, buildings) compress well at 80%.

## Risks / Trade-offs

- [Loss of originals] → The script backs up originals to a `_originals/` subfolder first
- [Quality too low] → Quality parameter can be bumped to 85-90% if needed; easy to re-run
- [Script fails mid-way] → Script processes files sequentially; failed files simply remain unoptimized (idempotent)
