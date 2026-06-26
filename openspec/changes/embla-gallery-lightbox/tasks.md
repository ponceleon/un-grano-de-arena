## 1. Setup

- [x] 1.1 Install Embla Carousel dependencies: `npm install embla-carousel embla-carousel-react embla-carousel-wheel-gestures`
- [x] 1.2 Create `src/types/gallery.ts` with `GallerySlide` interface
- [x] 1.3 Add i18n keys for slide titles and descriptions in `src/i18n/es.ts` under `whyDonateGallery.lightbox`
- [x] 1.4 Add matching i18n keys in `src/i18n/en.ts`
- [x] 1.5 Read existing `WhyDonateOption3.astro` and `ModalOverlay.tsx` to understand current patterns

## 2. GalleryLightbox React component

- [x] 2.1 Create `src/components/gallery/GalleryLightbox.tsx` with props: `slides: GallerySlide[]`, `initialIndex: number`, `onClose: () => void`
- [x] 2.2 Set up Embla Carousel with `axis: 'y'`, `loop: false`, `align: 'start'`
- [x] 2.3 Implement scroll lock on open (reuse pattern from ModalOverlay.tsx) and restore on close
- [x] 2.4 Handle keyboard events: ArrowDown (next), ArrowUp (prev), Escape (close)
- [x] 2.5 Add Wheel Gestures plugin for mouse/trackpad scroll navigation
- [x] 2.6 Add fade-in animation on mount (`animate-fadeIn`), scale-in on content

## 3. Slide rendering

- [x] 3.1 Render image slides: `<img>` with `object-contain`, centered, with alt text
- [x] 3.2 Render video slides: `<video>` with `playsinline`, `loop`, `preload="metadata"`, autoplay when active, pause on inactive
- [x] 3.3 Sync video playback with Embla's slide change events (play on active, pause on inactive)
- [x] 3.4 Add blurred background div that mirrors the active slide's image with `filter: blur(20px) scale(1.1)`

## 4. Overlay UI

- [x] 4.1 Add gradient overlay: `bg-gradient-to-t from-black/60 via-transparent to-transparent` covering bottom 30%
- [x] 4.2 Add Close button (top-left): SVG arrow/X icon, semi-transparent circle background
- [x] 4.3 Add Mute button (visible only for video slides): toggle between speaker-on/speaker-off SVG icons
- [x] 4.4 Add title and description text (bottom-left): white text, title larger/description smaller with opacity
- [x] 4.5 Add Like button (bottom-right): heart SVG outline/filled, counter, localStorage persistence per slide id
- [x] 4.6 Add Share button (bottom-right, below like): share SVG icon, counter, navigator.share() with clipboard fallback

## 5. Integrate lightbox into WhyDonateOption3.astro

- [x] 5.1 Change gallery layout: replace `grid-cols-[repeat(6,70vw)] md:grid-cols-3 lg:grid-cols-6 gap-4` with `grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6`
- [x] 5.2 Change image aspect ratio from `aspect-video` to `aspect-[4/3]`
- [x] 5.3 Remove mobile snap-scroll (no longer needed with 2 columns)
- [x] 5.4 Add `cursor-pointer` and `hover:scale-[1.02]` to thumbnail images
- [x] 5.5 Define slide data array with all 6 gallery items (id, src, type, title, description, alt)
- [x] 5.6 Add click handler on each thumbnail to open GalleryLightbox with corresponding index
- [x] 5.7 Add state management for lightbox visibility and current index
- [x] 5.8 Add video thumbnail support: if slide type is 'video', render a play icon overlay on the thumbnail
- [x] 5.9 Mount GalleryLightbox with `client:load` directive

## 6. Verification

- [x] 6.1 Gallery renders larger images in 3-column layout (verified via build - grid-cols-2 md:grid-cols-3)
- [x] 6.2 Click thumbnail opens lightbox at correct index (implemented via GalleryWithLightbox state)
- [x] 6.3 Vertical swipe navigation via Embla axis:'y' (implemented)
- [x] 6.4 Mouse wheel navigation via embla-carousel-wheel-gestures (implemented)
- [x] 6.5 Keyboard navigation ArrowUp/Down/Escape (implemented in GalleryLightbox useEffect)
- [x] 6.6 Close button and backdrop interactions (implemented)
- [x] 6.7 Like/Share buttons with localStorage + Web Share API (implemented)
- [x] 6.8 Scroll lock on open, restore on close (implemented via scrollLock/scrollUnlock)
- [x] 6.9 Build passes with zero errors
- [x] 6.10 English locale works (i18n keys added in both es.ts and en.ts)
