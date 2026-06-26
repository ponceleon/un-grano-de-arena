## Why

The donation counter showing "X donations" with a progress bar and "last updated" date creates a poor impression when the count is very low (currently 0). Hiding it until the count reaches a meaningful number avoids discouraging potential donors and keeps the focus on the call to action.

## What Changes

- Remove the donation counter section (count text, progress bar, and last-updated date) from the DonationWidget component
- Remove the `donationCount` and `lastUpdated` props from DonationWidget
- Remove the `donations` import and props from EmergencyHero.astro
- Remove the now-unused `donations` and `lastUpdated` translation keys from i18n files
- The `donations.json` data file can remain (no need to delete data)

## Capabilities

### New Capabilities
- `hide-donation-counter`: Hides the visual donation counter (count + progress bar + last-updated date) from the donation widget. The widget's payment functionality (PayPal/Zelle) remains unchanged.

### Modified Capabilities

(No existing shared specs are being modified - this is a standalone change.)

## Impact

- `src/components/DonationWidget.tsx`: Remove counter JSX block, remove `donationCount` and `lastUpdated` props
- `src/components/EmergencyHero.astro`: Remove `donations` import and prop passing
- `src/i18n/es.ts`: Remove `donations` and `lastUpdated` keys from widget translations
- `src/i18n/en.ts`: Remove `donations` and `lastUpdated` keys from widget translations
- `src/data/donations.json`: Left in place (no deletion)
