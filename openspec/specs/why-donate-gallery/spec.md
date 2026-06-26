## ADDED Requirements

### Requirement: Gallery images are larger and more prominent

The gallery strip in WhyDonateOption3 SHALL display images at a larger size to give them protagonism, changing from a 6-column grid to a 3-column grid.

#### Scenario: Desktop layout uses 3 columns
- **WHEN** viewed on screens `md` and above (768px+)
- **THEN** the gallery SHALL use `grid grid-cols-3 gap-6` layout
- **AND** each image SHALL be `aspect-[4/3]` instead of `aspect-video` (16:9)

#### Scenario: Mobile layout uses 2 columns
- **WHEN** viewed on screens below `md` (768px)
- **THEN** the gallery SHALL use `grid grid-cols-2 gap-4` layout
- **AND** horizontal scrolling (`snap-x`) SHALL be removed (no longer needed with 2 columns)

#### Scenario: Thumbnails have click cursor
- **WHEN** user hovers over a gallery image
- **THEN** the cursor SHALL change to `cursor: pointer`
- **AND** a subtle scale effect SHALL apply (`hover:scale-[1.02]`)

### Requirement: Gallery thumbnails open lightbox

Each image in the gallery strip SHALL be clickable and open the GalleryLightbox at the corresponding slide index.

#### Scenario: Click opens lightbox at correct index
- **WHEN** user clicks gallery image at index N
- **THEN** the GalleryLightbox SHALL open with `initialIndex: N`
- **AND** the lightbox SHALL contain all 6 gallery items as slides

#### Scenario: Gallery passes slide data to lightbox
- **WHEN** rendering the gallery
- **THEN** each image SHALL have an associated `GallerySlide` object with `id`, `src`, `title`, `description`, `alt`, and `type`
- **AND** the slide data SHALL be passed to the GalleryLightbox component

### Requirement: Gallery supports video thumbnails

The gallery SHALL support displaying video thumbnails alongside image thumbnails, visually distinguished with a play icon overlay.

#### Scenario: Video thumbnail shows play icon
- **WHEN** a gallery item has `type: 'video'`
- **THEN** the thumbnail SHALL display a small play icon overlay (centered, semi-transparent)
- **AND** clicking it SHALL open the lightbox with the video slide active
