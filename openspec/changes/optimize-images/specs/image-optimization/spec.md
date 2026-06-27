## ADDED Requirements

### Requirement: Batch optimization script
The system SHALL provide a Node.js script using sharp that optimizes all JPEG images in `public/images/why-donate/`.

#### Scenario: Script optimizes all images
- **WHEN** the script is run with `node scripts/optimize-images.mjs`
- **THEN** every `.jpg` file in `public/images/why-donate/` is resized and compressed
- **THEN** original files are backed up to `public/images/why-donate/_originals/`
- **THEN** total file size across all images is reduced to under 5 MB

### Requirement: Image dimensions
The script SHALL generate variants at widths of 1920px, 1200px, 800px, and 400px while maintaining aspect ratio.

#### Scenario: Variants created
- **WHEN** the script processes an image
- **THEN** a 1920px-wide variant replaces the original file
- **THEN** `@1200w`, `@800w`, and `@400w` suffixed variants are created alongside

### Requirement: JPEG quality
The script SHALL encode JPEG output at quality 80 using sharp's default chroma subsampling (4:2:0).

#### Scenario: Compression applied
- **WHEN** an image is processed
- **THEN** the output uses JPEG quality 80
- **THEN** the output is visually comparable to the original at normal viewing sizes

### Requirement: Idempotent execution
The script SHALL be safe to run multiple times without duplicating work or corrupting files.

#### Scenario: Re-running the script
- **WHEN** the script is run a second time
- **THEN** it replaces previously optimized files without errors
- **THEN** the backup folder retains only the latest original versions
