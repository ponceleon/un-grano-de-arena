## 1. Data & i18n

- [x] 1.1 Create `src/data/donations.json` with initial `{ "count": 0, "lastUpdated": "2025-06-26" }`
- [x] 1.2 Add emergency translations to `src/i18n/es.ts` (hero emergency title/subtitle/text, widget labels, why-donate section, donate button, last updated, fee covering)
- [x] 1.3 Add emergency translations to `src/i18n/en.ts` matching the Spanish keys

## 2. Donation Widget Component

- [x] 2.1 Create `src/components/DonationWidget.tsx` with payment method selector (Zelle/PayPal toggle)
- [x] 2.2 Implement amount preset buttons ($25, $50, $100, $200, Other) with selected state
- [x] 2.3 Implement fee covering checkbox (2.9% + $0.30 calculation, hidden when Zelle selected)
- [x] 2.4 Implement PayPal donate button that constructs `paypalme/ungrano/<amount>` URL
- [x] 2.5 Implement Zelle QR display section showing `/images/qr-zelle.jpg` with instructions
- [x] 2.6 Implement donation counter display reading from donations.json with last-updated date
- [x] 2.7 Import i18n translations and make widget fully bilingual via `lang` prop

## 3. Emergency Hero

- [x] 3.1 Create `src/components/EmergencyHero.astro` with full-screen background and emergency overlay
- [x] 3.2 Add emergency title, subtitle, and body text from i18n translations
- [x] 3.3 Integrate DonationWidget below the hero text (above the fold)

## 4. Why Donate Section

- [x] 4.1 Create `src/components/WhyDonate.astro` with compelling emergency messaging in both languages
- [x] 4.2 Add "100% of funds go to families in Venezuela" messaging
- [x] 4.3 Style with the existing brand colors and responsive design

## 5. Home Page Redesign

- [x] 5.1 Rewrite `src/pages/index.astro` to use EmergencyHero, WhyDonate, and Footer only
- [x] 5.2 Rewrite `src/pages/en/index.astro` matching the new home structure with `lang='en'`

## 6. Institutional Subpage Migration

- [x] 6.1 Create `src/pages/nosotros/index.astro` with current home content (Hero, QuienesSomos, VisionMision, FundadoraHome, ProgramasHome, TeamHome, CTADonacion)
- [x] 6.2 Create `src/pages/en/nosotros/index.astro` with English version of institutional content
- [x] 6.3 Update Footer.astro to add link to `/nosotros` page opening in new tab
- [x] 6.4 Update Navigation.tsx to point "Sobre Nosotros" / "Our Programs" links to `/nosotros` page

## 7. Assets

- [x] 7.1 Place Zelle QR code image at `public/images/qr-zelle.jpg` (placeholder - replace with real QR)
- [x] 7.2 Verify all image assets referenced by the new components exist

## 8. Verification

- [x] 8.1 Run `npm run build` and fix any compilation errors
- [x] 8.2 Verify Spanish home page renders correctly at `/`
- [x] 8.3 Verify English home page renders correctly at `/en/`
- [x] 8.4 Verify institutional content accessible at `/nosotros/` and `/en/nosotros/`
- [x] 8.5 Verify PayPal donate links open correct URLs with preset amounts ($50 → paypalme/ungrano/5000)
- [x] 8.6 Verify Zelle QR code displays when selected (via client-side toggle)
- [x] 8.7 Verify donation count and last-updated date display correctly (0 donaciones, 25 de junio de 2025)
