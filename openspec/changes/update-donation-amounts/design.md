## Context

`DonationWidget.tsx` defines preset amounts as a constant array `PRESET_AMOUNTS = [25, 50, 100, 200]`, rendered in a `grid-cols-4` layout. The change replaces these values and adjusts the grid.

## Goals / Non-Goals

**Goals:**
- Change preset amounts to `[20, 40, 60, 80, 100]`
- Ensure the grid layout displays 5 buttons cleanly on mobile and desktop

**Non-Goals:**
- No changes to i18n, styling, fee calculation, PayPal URLs, or widget behavior

## Decisions

1. **Responsive grid**: Use `grid-cols-3 md:grid-cols-5` — 3 buttons per row on mobile (wraps to 2+3), 5 per row on desktop where space allows. Alternative was `grid-cols-5` always, but buttons would be too narrow on small screens.
2. **No component restructuring**: The `PRESET_AMOUNTS` constant is the only data source; no props, state, or config changes needed.

## Risks / Trade-offs

- None — this is purely a data array change with a minor CSS adjustment
