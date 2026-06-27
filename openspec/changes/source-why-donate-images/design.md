## Context

15 placeholder JPG images currently exist in `public/images/why-donate/`. They are solid-color blocks generated to keep the build passing. The `why-donate-gallery-options` change created 4 Astro components that reference specific image paths. Now those paths need real photographs from the Venezuela earthquake of June 24, 2026.

The image naming convention is already fixed:
- Option 1: `alimentos-option1.jpg`, `refugio-option1.jpg`, `agua-salud-option1.jpg`
- Option 2: `alimentos-option2.jpg`, `refugio-option2.jpg`, `agua-salud-option2.jpg`
- Option 3: `gallery-1.jpg` through `gallery-6.jpg`
- Option 4: `alimentos-option4.jpg`, `refugio-option4.jpg`, `agua-salud-option4.jpg`

## Goals / Non-Goals

**Goals:**
- Replace all 15 placeholder images with real earthquake photographs
- Ensure images are licensed for use (CC0, CC-BY, or properly acquired)
- Maintain the same filenames so no component changes are needed
- Match images to their category concept (alimentos → food distribution, refugio → shelter/damage, agua-salud → medical/water)

**Non-Goals:**
- Changing any component, i18n, or configuration code
- Creating new image variants or sizes
- Image optimization or format conversion (JPEG is fine)
- Adding image captions or photo credit overlays to the UI (may be added separately)

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Image sources | AP News, Reuters, AFP via Al Jazeera gallery, and verified free-license sources | AP and Reuters have the most comprehensive coverage of the event |
| License approach | Prioritize CC0/CC-BY from free sources; if unavailable, use AP images with credit/caption (fair use for NGO humanitarian site) | NGO humanitarian use may qualify for different licensing terms |
| Aspect ratio | Keep as close to original composition as possible; images are cropped by `object-cover` CSS | The components use `object-cover` which crops to fit — no need to pre-crop images |
| Attribution | Add a credits section to the component (e.g., "Photos: AP Photo/Ariana Cubillos") or a footnote in the footer | Required for CC-BY and recommended for AP/Reuters as a courtesy |
| Fallback strategy | Keep existing placeholders until real images are confirmed working | Allows incremental replacement without breaking the build |

## Risks / Trade-offs

- **[Copyright]** Most AP/Getty/Reuters images are not openly licensed. Using them without permission on a live site could create legal risk → Mitigation: prioritize CC0/CC-BY sources (Unsplash, Wikimedia Commons). Use AP/Reuters only if the organization has a licensing agreement or for internal testing.
- **[Content sensitivity]** Earthquake images may show injured people or deceased victims → Mitigation: avoid graphic or gory images. Focus on rescue efforts, solidarity, distribution of aid — not casualties.
- **[Image quality]** Free-source images may be lower resolution than news agency photos → Mitigation: the components display at moderate sizes (300-400px), so even 800px-wide images work fine.
- **[Relevance]** Finding free-license images of this specific event may be difficult since it's a recent news event → Mitigation: check if news agencies offer free/humanitarian-use licensing for NGOs. Wikimedia Commons may have user-uploaded content.
