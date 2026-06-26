## ADDED Requirements

### Requirement: Option 1 - Photo swap (emoji → circular thumbnail)

The system SHALL render a component (`WhyDonateOption1.astro`) that displays the 3-category card grid with the exact same layout as the existing `WhyDonate.astro`, except each card's emoji icon is replaced by a circular photograph representing that category.

#### Scenario: Option 1 renders 3-column grid with circular photos
- **WHEN** `WhyDonateOption1.astro` is rendered with `lang='es'`
- **THEN** it SHALL display a 3-column grid with cards for Alimentos, Refugio, and Agua y Salud
- **AND** each card SHALL contain a `w-20 h-20 rounded-full overflow-hidden` image at the top instead of an emoji
- **AND** the image SHALL use `object-cover` for proper cropping
- **AND** each card SHALL retain its colored background (`bg-primary-50`, `bg-secondary-50`, `bg-accent-50`)

#### Scenario: Option 1 hover effect on photo
- **WHEN** user hovers over a card's photo
- **THEN** the photo SHALL scale up (`hover:scale-110`) with `transition-all duration-300`

### Requirement: Option 2 - Image background cards

The system SHALL render a component (`WhyDonateOption2.astro`) where each of the 3 category cards uses a full background image with a dark gradient overlay and text centered on top.

#### Scenario: Option 2 renders as image-backed hero cards
- **WHEN** `WhyDonateOption2.astro` is rendered
- **THEN** each card SHALL display a full-bleed background image with `object-cover` and `aspect-[4/3]`
- **AND** each card SHALL have a `bg-gradient-to-t from-black/70 to-black/20` overlay
- **AND** the category title and description SHALL appear as white text centered over the image
- **AND** each card SHALL have `rounded-2xl overflow-hidden` to clip the image corners

#### Scenario: Option 2 hover zoom effect
- **WHEN** user hovers over a card
- **THEN** the background image SHALL scale up (`hover:scale-105 group-hover:scale-105`)
- **AND** the card SHALL show `hover:shadow-2xl`

### Requirement: Option 3 - Gallery strip between cards and text

The system SHALL render a component (`WhyDonateOption3.astro`) that preserves the existing 3 emoji cards exactly and adds a horizontal gallery/image strip between the cards and the paragraph text.

#### Scenario: Option 3 preserves emoji cards and adds gallery strip
- **WHEN** `WhyDonateOption3.astro` is rendered
- **THEN** it SHALL display the original 3 emoji-backed cards unchanged (same as current WhyDonate.astro)
- **AND** below the cards, it SHALL display a gallery strip with 4-6 images in a `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4`
- **AND** each gallery image SHALL be `aspect-video rounded-xl object-cover` with `hover:scale-105 hover:shadow-lg transition-all`
- **AND** the paragraphs and CTA SHALL appear below the gallery strip

#### Scenario: Option 3 gallery strip is scrollable on mobile
- **WHEN** viewed on screens below `md` breakpoint
- **THEN** the gallery strip MAY use `overflow-x-auto snap-x snap-mandatory` for horizontal scrolling
- **AND** each image SHALL be `snap-start`

### Requirement: Option 4 - Horizontal card layout

The system SHALL render a component (`WhyDonateOption4.astro`) where the 3 category cards are stacked vertically, each with a horizontal layout: image on the left, text content on the right.

#### Scenario: Option 4 renders horizontal card stack
- **WHEN** `WhyDonateOption4.astro` is rendered
- **THEN** it SHALL display 3 cards stacked vertically in a single column
- **AND** each card SHALL use `flex flex-col md:flex-row` layout
- **AND** the left side SHALL contain an `aspect-video md:aspect-square w-full md:w-48` image with `object-cover rounded-2xl`
- **AND** the right side SHALL contain the category title and description text
- **AND** cards SHALL be separated by `gap-6` and use `bg-white rounded-2xl shadow-md p-6`

#### Scenario: Option 4 alternating pattern
- **WHEN** rendering the 3 cards
- **THEN** each card SHOULD alternate the image side (left → right → left) for visual rhythm on desktop
- **AND** on mobile all images SHALL be on top (standard flex column order)

### Requirement: Image loading and fallback

All components SHALL handle missing images gracefully without breaking layout.

#### Scenario: Missing image uses CSS fallback
- **WHEN** an image fails to load or the `src` is empty
- **THEN** the image container SHALL display a solid color background matching the category (using `bg-primary-200` for Alimentos, `bg-secondary-200` for Refugio, `bg-accent-200` for Agua y Salud)
- **AND** the layout dimensions SHALL be preserved (no collapse)

### Requirement: i18n image alt texts

The system SHALL provide translated alt text for all images used in the gallery components.

#### Scenario: Image alt text loads from translation file
- **WHEN** any gallery component renders an image
- **THEN** the `alt` attribute SHALL be populated from i18n keys `whyDonateGallery.option1.alimentosAlt`, `whyDonateGallery.option1.refugioAlt`, etc.
- **AND** Spanish translations SHALL be in `src/i18n/es.ts`
- **AND** English translations SHALL be in `src/i18n/en.ts`
