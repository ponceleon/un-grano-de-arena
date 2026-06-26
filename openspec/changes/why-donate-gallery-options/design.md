## Context

The "Por qué donar?" section (`src/components/WhyDonate.astro`) is a static Astro component with a 3-column emoji card grid, descriptive paragraphs, a highlighted 100% funds box, and a CTA button. It's used on the emergency landing pages (`/` and `/en/`). The project uses Astro 5, Tailwind CSS 3, and i18n via `src/i18n/{es,en}.ts`.

Images will be sourced from the Venezuela earthquake (June 24, 2026) and stored in `public/images/why-donate/`. Four gallery options will be built as independent components in `src/components/gallery/` so they can be compared side-by-side without touching the original.

## Goals / Non-Goals

**Goals:**
- Create 4 independent Astro gallery components, one per visual approach
- All components accept `lang` prop for i18n and map to the 3 existing categories (Alimentos, Refugio, Agua y Salud)
- Use existing visual conventions (Tailwind colors, font-heading, rounded-2xl, shadows, hover effects)
- Each component is self-contained — drop it into a page and it works
- Add image alt text i18n keys in both languages

**Non-Goals:**
- Modifying the existing `WhyDonate.astro` component
- Adding client-side JavaScript (lightbox, carousel) — these are static layouts. JS interactivity can be added later
- Final image selection — the components use placeholder paths; images are sourced separately
- Deciding which option ships — four co-exist for evaluation

## Decisions

| Decision | Choice | Rationale | Alternatives Considered |
|---|---|---|---|
| Component location | `src/components/gallery/` | Keeps gallery components grouped, easy to find and swap | Inline in existing WhyDonate.astro — would bloat file and lose clean separation |
| Image path convention | `/images/why-donate/{category}-{variant}.jpg` e.g. `alimentos-option1.jpg` | Consistent, self-documenting, easy to glob | Numeric naming — harder to understand at a glance |
| Category mapping | Each option maps 1:1 to the 3 existing categories (Alimentos, Refugio, Agua y Salud) | Keeps content aligned with existing i18n keys — no new content model needed | Unstructured gallery with N images — loses connection to the cards' message |
| Aspect ratio for images | `aspect-video` (16:9) for options 1, 3, 4; full-bleed for option 2 | Consistent with existing `Card.astro` pattern | Square (1:1) — too restrictive for landscape photography |
| Hover effects | Match existing site patterns: `hover:scale-105`, `hover:shadow-xl`, `transition-all duration-300` | Visual cohesion — gallery should feel like part of the same site | Custom animations — would feel disconnected from the codebase style |
| Image directory | `public/images/why-donate/` | Astro serves `public/` as static assets, no build step needed | `src/assets/` — requires import-based usage, less flexible for image sourcing |

## Risks / Trade-offs

- **[Content gap]** If suitable earthquake images are not found, the components may use placeholder images (via `https://placehold.co` or colored Tailwind backgrounds as fallback) → Mitigation: design components to degrade gracefully — set `background-color` on image containers so they render as solid color blocks when image is missing
- **[Performance]** 4 components = 4x the markup. Only one will eventually ship, but until then all 4 are built. → Mitigation: trivial impact — the components are small and static
- **[Image sourcing]** Earthquake imagery may be copyrighted or sensitive → Mitigation: use only openly licensed or organization-owned photography. Add attribution where required
- **[i18n drift]** Alt texts in translation files may become stale if images change independently → Mitigation: image alt keys are tied to component variants, not filenames, so changing the file doesn't require translation updates
