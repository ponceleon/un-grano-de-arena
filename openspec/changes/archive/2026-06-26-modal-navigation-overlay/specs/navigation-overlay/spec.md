## ADDED Requirements

### Requirement: Intercept internal navigation
The system SHALL intercept clicks on internal links (starting with `/`) from the emergency home page and open their content in a modal instead of navigating away. External links and home page links SHALL NOT be intercepted.

#### Scenario: Click internal link on home page
- **WHEN** user clicks "Sobre Nosotros" link in the navigation while on the emergency home page
- **THEN** the default navigation SHALL be prevented and a modal SHALL open showing the content of `/nosotros/`

#### Scenario: Click external link
- **WHEN** user clicks a PayPal.me link in the navigation
- **THEN** the link SHALL open normally in a new tab

#### Scenario: Click home link
- **WHEN** user clicks "Inicio" / "Home" link in the navigation
- **THEN** the link SHALL NOT be intercepted (stays on the home page, no modal)

### Requirement: Fetch content into modal
The system SHALL fetch the target page's HTML, extract the content inside `#main-content`, and render it inside the modal.

#### Scenario: Content loads successfully
- **WHEN** user clicks an internal link and the fetch succeeds
- **THEN** the modal SHALL display the extracted content with a close button (X) at the top right

#### Scenario: Content fails to load
- **WHEN** user clicks an internal link and the fetch fails
- **THEN** the modal SHALL display an error message and a close button

### Requirement: Modal behavior
The modal SHALL display as an overlay with a semi-transparent dark background. The modal SHALL be closable via: clicking the X button, clicking outside the modal content area, or pressing the Escape key.

#### Scenario: Close with X button
- **WHEN** user clicks the X button in the modal header
- **THEN** the modal SHALL close and the home page SHALL be fully visible again

#### Scenario: Close with Escape key
- **WHEN** user presses the Escape key while the modal is open
- **THEN** the modal SHALL close

#### Scenario: Close by clicking outside
- **WHEN** user clicks on the dark overlay background (outside the modal content)
- **THEN** the modal SHALL close

### Requirement: Scroll lock
When the modal is open, the body SHALL have `overflow: hidden` to prevent background scrolling. The modal content itself SHALL be scrollable.

#### Scenario: Prevent body scroll
- **WHEN** the modal opens
- **THEN** the body SHALL have `overflow: hidden` applied

#### Scenario: Restore body scroll
- **WHEN** the modal closes
- **THEN** the body SHALL have its original scroll behavior restored

### Requirement: Content wrapper ID
All institutional pages (including `/nosotros/` and `/en/nosotros/`) SHALL wrap their main content in a `<main id="main-content">` element so the fetch can extract it.

#### Scenario: Main content wrapper exists
- **WHEN** visiting `/nosotros/` or `/en/nosotros/`
- **THEN** the `<main>` element SHALL have `id="main-content"`

### Requirement: Loading indicator
While content is being fetched, the modal SHALL show a loading indicator.

#### Scenario: Show loading state
- **WHEN** user clicks an internal link and content is being fetched
- **THEN** the modal SHALL display a loading spinner or animated dots while waiting for the response

### Requirement: Responsive modal
The modal content area SHALL be responsive: full width and height on mobile, centered with max-width and padding on desktop.

#### Scenario: Mobile viewport
- **WHEN** the modal is open on a mobile screen (< 768px)
- **THEN** the content area SHALL fill the full screen width and most of the height

#### Scenario: Desktop viewport
- **WHEN** the modal is open on a desktop screen (>= 768px)
- **THEN** the content area SHALL be centered with max-width and margin
