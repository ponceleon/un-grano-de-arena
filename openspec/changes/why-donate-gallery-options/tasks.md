## 1. Setup: directory structure and i18n

- [x] 1.1 Create `src/components/gallery/` directory
- [x] 1.2 Create `public/images/why-donate/` directory
- [x] 1.3 Add i18n keys for image alt texts to `src/i18n/es.ts` under a `whyDonateGallery` object
- [x] 1.4 Add matching i18n keys to `src/i18n/en.ts`
- [x] 1.5 Read `src/components/WhyDonate.astro` and `src/i18n/index.ts` to understand the existing patterns

## 2. Option 1: Photo swap (emoji → circular thumbnail)

- [x] 2.1 Create `src/components/gallery/WhyDonateOption1.astro` as a copy of `WhyDonate.astro` structure
- [x] 2.2 Replace emoji `div`s with `w-20 h-20 rounded-full overflow-hidden` image containers with `object-cover`
- [x] 2.3 Wire image `src` attributes to `/images/why-donate/alimentos-option1.jpg`, `refugio-option1.jpg`, `agua-salud-option1.jpg`
- [x] 2.4 Wire `alt` attributes to i18n keys
- [x] 2.5 Add `hover:scale-110 transition-all duration-300` to images

## 3. Option 2: Image background cards

- [x] 3.1 Create `src/components/gallery/WhyDonateOption2.astro`
- [x] 3.2 Structure each card with `relative overflow-hidden rounded-2xl aspect-[4/3] group`
- [x] 3.3 Add full-bleed `<img>` with `object-cover w-full h-full absolute inset-0`
- [x] 3.4 Add gradient overlay: `bg-gradient-to-t from-black/70 to-black/20 absolute inset-0 z-10`
- [x] 3.5 Add text content overlay centered with `relative z-20 text-white`
- [x] 3.6 Add `hover:scale-105` on image and `hover:shadow-2xl` on card
- [x] 3.7 Wire image `src` and `alt` attributes

## 4. Option 3: Gallery strip between cards and text

- [x] 4.1 Create `src/components/gallery/WhyDonateOption3.astro` starting from a copy of `WhyDonate.astro`
- [x] 4.2 Insert a gallery strip between the `grid` div and the first `<p>` paragraph
- [x] 4.3 Build gallery strip as `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12`
- [x] 4.4 Add 4-6 gallery images with `aspect-video rounded-xl object-cover hover:scale-105 hover:shadow-lg transition-all`
- [x] 4.5 Add mobile horizontal scroll: `overflow-x-auto snap-x snap-mandatory` at `md` breakpoint
- [x] 4.6 Wire image `src` and `alt` attributes (gallery images: `gallery-1.jpg` through `gallery-6.jpg`)

## 5. Option 4: Horizontal card layout

- [x] 5.1 Create `src/components/gallery/WhyDonateOption4.astro`
- [x] 5.2 Structure as single-column stack of 3 cards with `flex flex-col gap-6`
- [x] 5.3 Each card: `flex flex-col md:flex-row bg-white rounded-2xl shadow-md p-6 gap-6`
- [x] 5.4 Image side: `w-full md:w-48 aspect-video md:aspect-square object-cover rounded-2xl`
- [x] 5.5 Alternate image side per card (left → right → left) using inline logic or CSS order
- [x] 5.6 Content side: title + description text in brown/gray colors matching site style
- [x] 5.7 Wire image `src` and `alt` attributes

## 6. Image assets

- [ ] 6.1 Source and download openly-licensed images from the Venezuela earthquake (June 24, 2026) — **pendiente: reemplazar placeholders**
- [x] 6.2 Save images to `public/images/why-donate/` following the naming convention (placeholders created)
- [x] 6.3 For Option 1: 3 images named `alimentos-option1.jpg`, `refugio-option1.jpg`, `agua-salud-option1.jpg`
- [x] 6.4 For Option 2: 3 images named `alimentos-option2.jpg`, `refugio-option2.jpg`, `agua-salud-option2.jpg`
- [x] 6.5 For Option 4: 3 images named `alimentos-option4.jpg`, `refugio-option4.jpg`, `agua-salud-option4.jpg`
- [x] 6.6 For Option 3 gallery strip: 6 images named `gallery-1.jpg` through `gallery-6.jpg`

## 7. Verification

- [ ] 7.1 Temporarily swap `WhyDonate.astro` with `WhyDonateOption1.astro` on `src/pages/index.astro` and confirm it renders
- [ ] 7.2 Repeat 7.1 for Option 2, Option 3, Option 4
- [x] 7.3 Run `npm run build` to confirm no build errors — **✓ Build passed**
- [ ] 7.4 Verify English locale renders correctly at `/en/`
