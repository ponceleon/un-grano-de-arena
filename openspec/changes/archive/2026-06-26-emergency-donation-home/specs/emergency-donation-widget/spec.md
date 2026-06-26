## ADDED Requirements

### Requirement: Payment method selection
The donation widget SHALL offer two payment methods: Zelle (QR code) and PayPal (paypal.me link). The user SHALL select one method before seeing the relevant action.

#### Scenario: User selects PayPal
- **WHEN** user clicks the "PayPal" payment method option
- **THEN** the widget displays amount selection buttons and hides the Zelle QR code

#### Scenario: User selects Zelle
- **WHEN** user clicks the "Zelle" payment method option
- **THEN** the widget displays a QR code image and account instructions, and hides the amount presets and PayPal options

### Requirement: Amount presets with PayPal
When PayPal is selected, the widget SHALL display preset amount buttons: $25, $50, $100, $200, and an "Other" custom input. The selected amount SHALL be visually highlighted.

#### Scenario: Selecting a preset amount
- **WHEN** user clicks the "$50" button
- **THEN** that button SHALL appear selected (highlighted) and the donate button SHALL update to reflect the amount

#### Scenario: Custom amount
- **WHEN** user clicks "Other" and enters a custom amount
- **THEN** the donate button SHALL update to reflect that amount

### Requirement: PayPal donate link with preset amount
The "Donate Now" button SHALL construct a PayPal.me URL with the selected amount as a parameter: `https://www.paypal.com/paypalme/ungrano/<AMOUNT>` where amount is the numeric value without decimal places (e.g., 5000 for $50.00).

#### Scenario: Click donate with $50 preset
- **WHEN** user selects $50 and clicks "Donate Now"
- **THEN** the link SHALL open `https://www.paypal.com/paypalme/ungrano/5000` in a new tab

### Requirement: Transaction fee covering
When PayPal is selected, the widget SHALL display a checkbox: "I'd like to add 2.9% + $0.30 to cover transaction fees." When checked, the donate button amount SHALL increase by the calculated fee.

#### Scenario: Fee covering adds to total
- **WHEN** user selects $50 and checks the fee covering checkbox
- **THEN** the donate button SHALL display "Donate Now $52.15" (50 + 1.45 + 0.30)

#### Scenario: Fee covering hidden for Zelle
- **WHEN** user selects Zelle payment method
- **THEN** the fee covering checkbox SHALL be hidden

### Requirement: Zelle QR display
When Zelle is selected, the widget SHALL display a QR code image from `/images/qr-zelle.jpg` and show text instructions for completing the transfer.

#### Scenario: Zelle method shows QR
- **WHEN** user selects Zelle
- **THEN** the QR code image and transfer instructions SHALL be displayed

### Requirement: Donation progress bar
The widget SHALL display a progress bar showing the donation count from the JSON data file, with a label showing "X donations" and the date of last update.

#### Scenario: Display donation count
- **WHEN** the widget renders
- **THEN** it SHALL show "15 donations" and "Last updated: June 26, 2025" based on the donations.json data

### Requirement: Emergency message
The hero section SHALL display an emergency message about the Venezuela earthquake in both Spanish and English, matching the org's voice.

#### Scenario: Spanish version displays
- **WHEN** the page loads in Spanish
- **THEN** the emergency title SHALL read "Emergencia Venezuela: Terremoto" with the corresponding body text

#### Scenario: English version displays
- **WHEN** the page loads in English (via `/en/`)
- **THEN** the emergency title SHALL read "Venezuela Emergency: Earthquake" with the corresponding body text
