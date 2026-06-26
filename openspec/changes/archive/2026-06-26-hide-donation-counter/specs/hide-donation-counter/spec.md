## REMOVED Requirements

### Requirement: Donation counter data file
**Reason**: The visual donation counter is being hidden to avoid showing a low count. The data file itself is no longer consumed by the UI, so its associated display requirements are removed.
**Migration**: Remove `donationCount` and `lastUpdated` props from DonationWidget. Remove the `donations` import and prop passing from EmergencyHero.astro. The `src/data/donations.json` file can remain as-is.

### Requirement: Counter display
**Reason**: The visual counter ("X donations" text + progress bar) draws attention to a low donation count, which may discourage potential donors.
**Migration**: Remove the counter JSX block from DonationWidget. Remove `donationCount` prop and `t.widget.donations` translation usage.

### Requirement: Last updated date display
**Reason**: The "last updated" date is only relevant alongside the counter, so it is removed as well.
**Migration**: Remove the last-updated JSX from DonationWidget. Remove `lastUpdated` prop and `t.widget.lastUpdated` translation usage.

### Requirement: Donation progress bar
**Reason**: The progress bar is part of the visual counter being hidden to avoid showing a low count.
**Migration**: Remove the progress bar JSX from DonationWidget.

## REMOVED Requirements

### Requirement: Manual update process
**Reason**: Since the counter display is removed, the manual update process for the display data is no longer relevant to the widget.
**Migration**: The `donations.json` file can remain. No migration needed.
