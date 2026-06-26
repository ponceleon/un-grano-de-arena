## 1. Content Wrapper

- [x] 1.1 Add `id="main-content"` to `<main>` in `src/pages/nosotros/index.astro`
- [x] 1.2 Add `id="main-content"` to `<main>` in `src/pages/en/nosotros/index.astro`
- [x] 1.3 Add `id="main-content"` to `<main>` in `src/pages/index.astro` (emergency home - for consistency)
- [x] 1.4 Add `id="main-content"` to `<main>` in `src/pages/en/index.astro` (emergency home - for consistency)

## 2. ModalOverlay Component

- [x] 2.1 Create `src/components/ModalOverlay.tsx` as a React component with open/close state management
- [x] 2.2 Implement fetch logic that gets the target page HTML, extracts `#main-content`, and renders it
- [x] 2.3 Implement loading spinner while content is being fetched
- [x] 2.4 Implement error state with retry/close options
- [x] 2.5 Implement close handlers: X button, overlay click, Escape key
- [x] 2.6 Implement scroll lock (`overflow: hidden` on body when open)
- [x] 2.7 Add link interception logic (global click listener for `a[href^="/"]` excluding `/` and external URLs)
- [x] 2.8 Style modal with Tailwind: overlay background, content area (responsive: full on mobile, centered on desktop), close button, animations (fade/scale)

## 3. Integration

- [x] 3.1 Import and render `ModalOverlay` in `src/pages/index.astro`
- [x] 3.2 Import and render `ModalOverlay` in `src/pages/en/index.astro`

## 4. Verification

- [x] 4.1 Run `npm run build` and fix any compilation errors
- [ ] 4.2 Verify clicking "Sobre Nosotros" from ES home opens modal with `/nosotros/` content
- [ ] 4.3 Verify clicking "About Us" from EN home opens modal with `/en/nosotros/` content
- [ ] 4.4 Verify closing modal via X button works
- [ ] 4.5 Verify closing modal via Escape key works
- [ ] 4.6 Verify closing modal via overlay click works
- [ ] 4.7 Verify external PayPal links still open normally
- [ ] 4.8 Verify "Inicio" / "Home" link stays on home without modal
- [ ] 4.9 Verify body scroll is locked when modal is open and restored when closed
- [ ] 4.10 Verify modal is responsive (full width on mobile, centered on desktop)
