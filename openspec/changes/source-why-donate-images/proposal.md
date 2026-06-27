## Why

The "Por qué donar?" section currently uses solid-color placeholder images in `public/images/why-donate/`. To communicate the urgency and reality of the Venezuela earthquake (June 24, 2026), these must be replaced with real, impactful photography. Finding openly-licensed or properly-acquired images is a distinct task from component creation — it requires research, sourcing, licensing evaluation, and downloading.

## What Changes

- Replace all 15 placeholder JPGs in `public/images/why-donate/` with real earthquake photographs
- Images are organized by option (option1, option2, option3, option4) and category (alimentos, refugio, agua-salud, gallery)
- License compliance: only use openly-licensed (CC0, CC-BY, public domain) or properly acquired images
- No component code changes — the image paths already match

## Capabilities

### New Capabilities
- `earthquake-image-assets`: Sourcing, licensing evaluation, and storage of earthquake photography for the Why Donate gallery

### Modified Capabilities

None — the existing `why-donate-gallery` capability covers the components; this is purely about the image asset layer.

## Impact

- **`public/images/why-donate/`**: All 15 files replaced with real photographs
- **No code changes**: Components, i18n, and structure remain untouched
- **License attribution**: If CC-BY images are used, attribution must be added to the site (footer or image captions)
