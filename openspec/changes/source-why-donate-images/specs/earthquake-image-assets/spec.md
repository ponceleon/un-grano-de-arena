## ADDED Requirements

### Requirement: Image source research

The system SHALL identify openly-licensed or properly acquirable photographs from the Venezuela earthquake of June 24, 2026, covering the categories of food distribution, shelter/damage, and water/medical aid.

#### Scenario: Source collection compiles candidate images
- **WHEN** researching image sources for each category
- **THEN** at least 3 candidate images per category SHALL be identified from one or more of: Unsplash, Wikimedia Commons, news agencies with NGO licensing, or the organization's own archives
- **AND** each candidate SHALL be evaluated for license type, resolution, and content appropriateness

### Requirement: Image download and storage

The system SHALL download selected images and save them to `public/images/why-donate/` with the exact filenames expected by the gallery components.

#### Scenario: Option 1 images are replaced
- **WHEN** images are downloaded for Option 1
- **THEN** `alimentos-option1.jpg` SHALL contain a food-related image (food distribution, hot meals, etc.)
- **AND** `refugio-option1.jpg` SHALL contain a shelter-related image (temporary housing, damaged buildings, etc.)
- **AND** `agua-salud-option1.jpg` SHALL contain a water/health-related image (water filters, medical care, etc.)

#### Scenario: Option 2 images are replaced
- **WHEN** images are downloaded for Option 2
- **THEN** the same category mapping applies: `alimentos-option2.jpg` → food, `refugio-option2.jpg` → shelter, `agua-salud-option2.jpg` → water/health

#### Scenario: Option 3 gallery images are replaced
- **WHEN** images are downloaded for Option 3
- **THEN** `gallery-1.jpg` through `gallery-6.jpg` SHALL contain diverse earthquake scene photos covering different aspects (damage, rescue, community, aid distribution)
- **AND** no two gallery images SHOULD show the exact same scene

#### Scenario: Option 4 images are replaced
- **WHEN** images are downloaded for Option 4
- **THEN** the same category mapping applies: `alimentos-option4.jpg` → food, `refugio-option4.jpg` → shelter, `agua-salud-option4.jpg` → water/health

### Requirement: Image quality standards

All images SHALL meet minimum quality requirements for web display.

#### Scenario: Resolution check
- **WHEN** an image is downloaded for the gallery
- **THEN** its resolution SHALL be at least 800px on the shortest dimension
- **AND** the image SHOULD be in JPEG format with reasonable compression (no visible artifacts at 100% zoom)

#### Scenario: Content appropriateness
- **WHEN** selecting images
- **THEN** images MUST NOT show graphic gore, deceased persons, or identifiable minors without consent
- **AND** images SHOULD emphasize rescue, solidarity, and humanitarian response rather than destruction alone

### Requirement: License documentation

The system SHALL document the license and source of each image for attribution purposes.

#### Scenario: License recorded for each image
- **WHEN** an image is saved to `public/images/why-donate/`
- **THEN** its source URL, photographer credit, and license type SHALL be recorded in a tracking file or spreadsheet
- **AND** CC-BY images SHALL have their attribution text ready for inclusion in the site footer or image caption area
