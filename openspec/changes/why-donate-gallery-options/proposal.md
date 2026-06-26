## Why

The "Por qué donar?" section currently relies on emoji icons and text to convey the impact of donations. Adding real photography of the Venezuela earthquake (June 24, 2026) will create an emotional connection, increase urgency, and visually demonstrate where donations go. Four distinct visual approaches have been explored — each will be built as an independent component so the team can compare, test, and decide which one ships.

## What Changes

- Create 4 new Astro components in `src/components/gallery/`, one per visual approach:
  - `WhyDonateOption1.astro` — emoji → circular photo swap (minimal change)
  - `WhyDonateOption2.astro` — image background cards (moderate change)
  - `WhyDonateOption3.astro` — gallery strip between cards and text (additive)
  - `WhyDonateOption4.astro` — horizontal card + photo layout (structural)
- Create image directory `public/images/why-donate/` for earthquake photography
- Add i18n entries for image alt texts in `src/i18n/es.ts` and `src/i18n/en.ts`
- No existing component is modified — all new components coexist alongside `WhyDonate.astro`

## Capabilities

### New Capabilities
- `why-donate-gallery`: Visual gallery system for the Why Donate section, with 4 interchangeable layout options and an image asset pipeline

### Modified Capabilities

None — existing `WhyDonate.astro` is preserved unchanged.

## Impact

- **New components**: `src/components/gallery/WhyDonateOption1.astro` through `WhyDonateOption4.astro`
- **New assets**: `public/images/why-donate/` directory with earthquake imagery
- **i18n**: New keys for image alt texts in both languages
- **No breaking changes**: Existing section continues working, old component untouched
