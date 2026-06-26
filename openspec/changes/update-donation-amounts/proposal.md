## Why

The current preset donation amounts ($25, $50, $100, $200) start at $25, but a lower entry point of $20 makes donating more accessible for more people. The updated amounts ($20, $40, $60, $80, $100) create a gentler, more granular progression that encourages participation at every level.

## What Changes

- Change the `PRESET_AMOUNTS` array in `DonationWidget.tsx` from `[25, 50, 100, 200]` to `[20, 40, 60, 80, 100]`
- Update the button grid layout to accommodate 5 buttons instead of 4 (`grid-cols-5` or responsive alternative)

## Capabilities

### New Capabilities

None — this is a data change within an existing component.

### Modified Capabilities

None — no spec-level requirement changes. The widget behavior is identical; only the preset values change.

## Impact

- `src/components/DonationWidget.tsx`: one constant array change + minor grid layout adjustment
- No i18n, no data files, no routing changes
