## Context

The DonationWidget component currently displays a donation counter with count text ("X donations"), a progress bar, and a "last updated" date. This data comes from a static JSON file and is passed via props from EmergencyHero.astro. The counter is purely cosmetic but draws attention to a low donation count.

## Goals / Non-Goals

**Goals:**
- Remove the donation counter visual elements from DonationWidget
- Remove the now-unnecessary props and data flow
- Keep all payment functionality (PayPal/Zelle) intact

**Non-Goals:**
- Deleting `donations.json` (no need to remove data)
- Adding any new feature to replace the counter
- Changing the layout or styling of remaining widget sections

## Decisions

1. **Props removal over conditional rendering** — Rather than conditionally hiding the counter with a prop/flag, completely remove the props (`donationCount`, `lastUpdated`) and the counter JSX. Simpler code with no dead branches.

2. **Translation keys removed** — Since the keys `donations` and `lastUpdated` are only used by the counter, remove them from both locale files. If the widget already has no other use for these, the keys become dead code.

3. **`donations.json` left in place** — The JSON file contains no secrets and removing it would add no value. It stays as an orphaned file that can be cleaned up later if desired.

## Risks / Trade-offs

- [Risk: Counter may be wanted later] → Re-adding it is straightforward: revert the prop interface and JSX changes, restore translation keys.
- [Risk: Other components depend on `donations` translations] → Low risk; a grep confirms these keys are only used in DonationWidget.
