## ADDED Requirements

### Requirement: Donation counter data file
The system SHALL maintain a JSON file at `src/data/donations.json` with the following structure: `{ "count": 0, "lastUpdated": "YYYY-MM-DD" }`. This file SHALL be manually updated.

#### Scenario: File exists at build time
- **WHEN** the Astro build runs
- **THEN** the JSON file SHALL be readable and its data SHALL be available to the DonationWidget component

### Requirement: Counter display
The widget SHALL display the current donation count from the JSON file with the label "X donations" in the user's language.

#### Scenario: Display count in Spanish
- **WHEN** the page is in Spanish and donations.json has count: 15
- **THEN** the widget SHALL display "15 donaciones"

#### Scenario: Display count in English
- **WHEN** the page is in English and donations.json has count: 15
- **THEN** the widget SHALL display "15 donations"

### Requirement: Last updated date display
The widget SHALL display the `lastUpdated` date from the JSON file formatted as a human-readable date in the user's language, with a label "Last updated:" / "Última actualización:".

#### Scenario: Spanish date format
- **WHEN** the page is in Spanish and lastUpdated is "2025-06-26"
- **THEN** the widget SHALL display "Última actualización: 26 de junio de 2025"

#### Scenario: English date format
- **WHEN** the page is in English and lastUpdated is "2025-06-26"
- **THEN** the widget SHALL display "Last updated: June 26, 2025"

### Requirement: Manual update process
The count SHALL be updated by editing `src/data/donations.json` directly and committing the change. No automated synchronization with payment gateways is required.

#### Scenario: Updating the counter
- **WHEN** an administrator edits the count value and lastUpdated date in donations.json
- **THEN** the next deployment SHALL reflect the new values on the live site
