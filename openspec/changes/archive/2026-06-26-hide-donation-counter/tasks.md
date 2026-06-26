## 1. Remove donation counter from DonationWidget

- [x] 1.1 Remove `donationCount` and `lastUpdated` from the `DonationWidgetProps` interface
- [x] 1.2 Remove the donation counter JSX block (lines 76-92: count text, progress bar, last-updated date)
- [x] 1.3 Remove the `formatDate` helper function (no longer needed)
- [x] 1.4 Remove the `Language` import (no longer used if not needed elsewhere) — verify first

## 2. Remove data flow from EmergencyHero

- [x] 2.1 Remove `import donations from '../data/donations.json'` from EmergencyHero.astro
- [x] 2.2 Remove `donationCount={donations.count}` and `lastUpdated={donations.lastUpdated}` props from DonationWidget instance

## 3. Clean up translations

- [x] 3.1 Remove `donations` and `lastUpdated` keys from `src/i18n/es.ts` widget translations
- [x] 3.2 Remove `donations` and `lastUpdated` keys from `src/i18n/en.ts` widget translations

## 4. Verify

- [x] 4.1 Run the project build to confirm no TypeScript or compilation errors
- [x] 4.2 Visually confirm the donation counter is no longer displayed in the widget, and all payment functionality still works
