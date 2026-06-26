## ADDED Requirements

### Requirement: GalleryLightbox renders full-screen vertical swipe viewer

The system SHALL render a React component (`GalleryLightbox.tsx`) that displays a full-screen modal overlay with a vertical swipe carousel (Embla Carousel, axis:'y') for navigating through images and videos.

#### Scenario: Lightbox opens on thumbnail click
- **WHEN** user clicks an image in the gallery
- **THEN** the lightbox SHALL open as a `fixed inset-0 z-[100]` overlay with black background
- **AND** the lightbox SHALL display the clicked image's slide as the initial active slide

#### Scenario: Lightbox supports vertical swipe navigation
- **WHEN** user swipes up/down on a touch device
- **THEN** the carousel SHALL navigate to the next/previous slide with smooth transition
- **AND** each slide SHALL occupy 100% of the viewport height (`h-dvh`)

#### Scenario: Lightbox supports wheel navigation
- **WHEN** user scrolls the mouse wheel or trackpad
- **THEN** the carousel SHALL navigate to the next/previous slide
- **AND** wheel events SHALL NOT scroll the page behind the lightbox

#### Scenario: Lightbox supports keyboard navigation
- **WHEN** user presses ArrowDown key
- **THEN** the carousel SHALL navigate to the next slide
- **WHEN** user presses ArrowUp key
- **THEN** the carousel SHALL navigate to the previous slide

#### Scenario: Lightbox closes on Escape key
- **WHEN** user presses the Escape key
- **THEN** the lightbox SHALL close and restore page scroll position

#### Scenario: Lightbox closes on Close button click
- **WHEN** user clicks the Close button (top-left)
- **THEN** the lightbox SHALL close

#### Scenario: Page scroll is locked while lightbox is open
- **WHEN** the lightbox is open
- **THEN** `document.body.style.overflow` SHALL be set to `'hidden'`
- **AND** the scroll position SHALL be restored when the lightbox closes

### Requirement: GalleryLightbox renders images at full screen

The system SHALL render `<img>` elements for slides of type `'image'`, filling the viewport while maintaining aspect ratio.

#### Scenario: Image slide renders with object-contain
- **WHEN** a slide has `type: 'image'`
- **THEN** it SHALL render an `<img>` with `object-contain` sizing
- **AND** the image SHALL be centered both vertically and horizontally
- **AND** the image SHALL have `alt` text from the slide data

### Requirement: GalleryLightbox renders videos with controls

The system SHALL render `<video>` elements for slides of type `'video'`, with autoplay when active, muted by default, and an unmute toggle.

#### Scenario: Video slide renders with autoplay
- **WHEN** a slide has `type: 'video'`
- **THEN** it SHALL render a `<video>` element with `playsinline`, `loop`, `preload="metadata"` attributes
- **AND** the video SHALL start playing automatically when the slide becomes active
- **AND** the video SHALL pause when the slide is no longer active

#### Scenario: Video starts muted with unmute toggle
- **WHEN** a video slide is active
- **THEN** the video SHALL start in muted state
- **AND** a mute/unmute button SHALL be visible in the overlay
- **WHEN** user clicks the mute button
- **THEN** the video SHALL toggle between muted and unmuted states
- **AND** the button icon SHALL reflect the current state

### Requirement: GalleryLightbox shows blurred background

The system SHALL display a blurred version of the active slide's image as a full-screen background behind the slide content.

#### Scenario: Blurred background shows active slide
- **WHEN** a slide is active
- **THEN** the lightbox SHALL display a `div` with the slide's image as `background-image`
- **AND** the background SHALL have `filter: blur(20px)` and `transform: scale(1.1)`
- **AND** the background SHALL update when the active slide changes

### Requirement: GalleryLightbox shows metadata overlay

The system SHALL display an overlay on each slide with title, description, like button, share button, and close button.

#### Scenario: Metadata overlay renders on each slide
- **WHEN** a slide is displayed
- **THEN** the overlay SHALL include a gradient from transparent at top to black at bottom (bottom 30% of slide)
- **AND** the slide title SHALL appear in white text at bottom-left
- **AND** the slide description SHALL appear below the title in white/70 opacity
- **AND** a Close button SHALL appear at top-left
- **AND** a Like button with count SHALL appear at bottom-right
- **AND** a Share button with count SHALL appear below the Like button at bottom-right

#### Scenario: Like button toggles state
- **WHEN** user clicks the Like button
- **THEN** the like count SHALL increment by 1
- **AND** the button icon SHALL change to filled/heart state
- **WHEN** user clicks the Like button again
- **THEN** the like count SHALL decrement by 1
- **AND** the button icon SHALL return to outline state
- **AND** like state SHALL be persisted in localStorage per slide id

#### Scenario: Share button uses Web Share API
- **WHEN** user clicks the Share button
- **AND** the browser supports `navigator.share()`
- **THEN** the Web Share API SHALL be called with the page URL and slide title
- **WHEN** Web Share API is not available
- **THEN** the share URL SHALL be copied to clipboard
- **AND** a brief tooltip SHALL confirm "Link copied"

### Requirement: Lightbox animations

The system SHALL animate the lightbox open/close and slide transitions.

#### Scenario: Lightbox opens with fade-in
- **WHEN** the lightbox opens
- **THEN** the overlay SHALL fade in from transparent to opaque over 200ms
- **AND** the first slide SHALL scale in from 95% to 100%

#### Scenario: Slide transition is smooth
- **WHEN** user navigates between slides
- **THEN** the transition SHALL take 300ms with ease-out timing
