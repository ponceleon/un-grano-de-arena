## Context

La sección "Por qué donar?" usa `WhyDonateOption3.astro` que tiene 6 imágenes en un `grid-cols-6` con `aspect-video`. Son pequeñas, estáticas, y no invitan a la interacción. El proyecto usa Astro 5 + React 19 + Tailwind CSS 3. Ya existe `ModalOverlay.tsx` (React) que maneja scroll-lock, tecla Escape y click en backdrop — patrones reutilizables.

El cambio añade: (1) un lightbox full-screen con swipe vertical (Shorts-style) potenciado por Embla Carousel, y (2) un rediseño del layout de la galería para que las imágenes sean más grandes y protagonistas.

## Goals / Non-Goals

**Goals:**
- Lightbox full-screen con swipe vertical touch, wheel, y teclado (flechas)
- Soporte de imágenes (`<img>`) y videos (`<video>` con controles nativos + mute)
- Overlay con: botón cerrar (top-left), título + descripción (bottom-left), like y compartir (bottom-right), mute (solo videos)
- Fondo blur del slide activo como backdrop
- Click en thumbnail abre lightbox en el índice correspondiente
- Galería rediseñada: de 6 columnas a 3 columnas (md+) con imágenes mucho más grandes
- Like local (contador localStorage) y compartir vía Web Share API
- Animaciones: fadeIn del modal, transición suave entre slides
- Integración i18n: slides con title/description desde archivos de traducción

**Non-Goals:**
- No se modifica WhyDonateOption1, Option2, ni Option4
- No se implementa backend de likes (persistencia solo localStorage)
- No se implementa autoplay de video al hacer scroll (se reproduce solo si el slide está activo)
- No se implementa loop infinito de slides
- No se agrega paginación (dots) ni flechas de navegación — solo swipe

## Decisions

| Decision | Choice | Rationale | Alternatives Considered |
|---|---|---|---|
| Swipe engine | **Embla Carousel v9** | ~13KB gzipped, axis:'y' nativo, hook React oficial (`useEmblaCarousel`), plugin wheel-gestures, API limpia | Swiper.js (~39KB) — más pesado y trae CSS propio que puede colisionar; Custom touch events — más control pero más riesgo de bugs en edge cases |
| Layout de galería | **grid-cols-3 md:gap-6** con imágenes grandes | Las 6 imágenes actuales son muy pequeñas en grid-cols-6. Reducir a 3 columnas duplica el ancho de cada imagen | grid-cols-2 — muy grande verticalmente; masonry — demasiado complejo para el contenido homogéneo |
| Like/Share | **Like: localStorage; Share: Web Share API** | Likes son emocionales, no necesitan backend. Share usa API nativa del browser con fallback a clipboard | Backend de likes — overkill para campaña de emergencia; Sin contador — pierde engagement |
| Videos | **`<video>` nativo con `playsinline`, `preload="metadata"`** | Sin dependencias externas. Funciona offline. Los videos serían MP4 locales o URLs públicas | YouTube embebido — requiere iframe, más peso, problemas con autoplay en mobile |
| Estados del like | **3 estados: no likeado, likeado, animación like** | UX similar a Instagram/TikTok — feedback inmediato al usuario | Solo 2 estados (on/off) — pierde la oportunidad de micro-interacción |
| Scroll lock | **Reutilizar patrón de ModalOverlay.tsx** | Ya está implementado y probado: `document.body.style.overflow = 'hidden'`, guardar `scrollY`, restaurar al cerrar | Usar librería externa — dependencia innecesaria |
| Fondo blur | **CSS backdrop-filter + imagen del slide activo como background** | Sin JS adicional, puro CSS. El blur se aplica a una capa `<div>` con `background-image` del slide actual | Canvas API — más complejo sin beneficio visual adicional |

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  WhyDonateOption3.astro (modificado)                     │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  3 columnas (md:grid-cols-3) gap-6               │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────┐  │   │
│  │  │              │ │              │ │          │  │   │
│  │  │   gallery-1  │ │   gallery-2  │ │ gallery-3│  │   │
│  │  │   (click)    │ │   (click)    │ │ (click)  │  │   │
│  │  └──────────────┘ └──────────────┘ └──────────┘  │   │
│  │  ┌──────────────┐ ┌──────────────┐ ┌──────────┐  │   │
│  │  │              │ │              │ │          │  │   │
│  │  │   gallery-4  │ │   gallery-5  │ │ gallery-6│  │   │
│  │  │   (click)    │ │   (click)    │ │ (click)  │  │   │
│  │  └──────────────┘ └──────────────┘ └──────────┘  │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
         │ click en cualquier thumbnail
         ▼
┌─────────────────────────────────────────────────────────┐
│  GalleryLightbox.tsx (React, client:load)                │
│                                                         │
│  fixed inset-0 z-[100] bg-black                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  <div blurred-bg> (slide activo como backdrop)   │    │
│  │                                                   │    │
│  │  <EmblaCarousel axis="y">                        │    │
│  │    ┌─────────────────────────────────────────┐   │    │
│  │    │ Slide 0 (100vh)                         │   │    │
│  │    │  ┌──────────────────────────────────┐   │   │    │
│  │    │  │  Media: <img> o <video>          │   │   │    │
│  │    │  │  object-contain h-full w-full     │   │   │    │
│  │    │  └──────────────────────────────────┘   │   │    │
│  │    │  ┌──────────────────────────────────┐   │   │    │
│  │    │  │  GradientOverlay (bottom→top)    │   │   │    │
│  │    │  │  ┌──────┐              ┌──────┐  │   │   │    │
│  │    │  │  │Close │              │Like  │  │   │   │    │
│  │    │  │  │      │              │Share │  │   │   │    │
│  │    │  │  └──────┘              └──────┘  │   │   │    │
│  │    │  │  ┌──────────────────────────────┐ │   │   │    │
│  │    │  │  │ Title + Description          │ │   │   │    │
│  │    │  │  └──────────────────────────────┘ │   │   │    │
│  │    │  └──────────────────────────────────┘   │   │    │
│  │    ├─────────────────────────────────────────┤   │    │
│  │    │ Slide 1 (100vh) ...                     │   │    │
│  │    └─────────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Component Tree

```
WhyDonateOption3.astro
  └── <div> galería grid-cols-3
       └── {slides.map((slide, i) =>
            <button onClick={() => open(i)}>
              <img ... />
            </button>
           )}

GalleryLightbox.tsx  ← mount condicional, portal o inline
  └── <div> fixed inset-0 z-[100]
       ├── <div> blurred-bg (imagen activa con blur)
       ├── <div> embla__viewport (ref)
       │    └── <div> embla__container (flex-col)
       │         └── {slides.map(slide =>
       │              <Slide key={slide.id}>
       │                ├── <MediaRenderer type={slide.type} />
       │                ├── <GradientOverlay />
       │                ├── <CloseButton />
       │                ├── {slide.type === 'video' && <MuteButton />}
       │                ├── <Metadata title description />
       │                ├── <LikeButton count />
       │                └── <ShareButton count />
       │             )}
       └── ...
```

## Data Model

```ts
// src/types/gallery.ts

export interface GallerySlide {
  id: string
  type: 'image' | 'video'
  src: string
  poster?: string          // thumbnail for videos
  title: string
  description?: string
  alt: string
  likes?: number           // initial like count
  shares?: number          // initial share count
}
```

## Styling (Tailwind)

| Elemento | Clases clave |
|---|---|
| Galería (desktop) | `grid grid-cols-3 gap-6` |
| Galería (mobile) | `grid grid-cols-2 gap-4` |
| Thumbnail | `aspect-[4/3] rounded-xl object-cover w-full hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer` |
| Lightbox wrapper | `fixed inset-0 z-[100] bg-black` |
| Slide container | `flex-[0_0_100%] h-dvh relative flex items-center justify-center` |
| Media (imagen) | `max-h-full max-w-full w-auto h-auto object-contain` |
| Media (video) | `max-h-full max-w-full w-auto h-auto object-contain` |
| Gradient overlay | `absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none` |
| Close button | `absolute top-4 left-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 text-white` |

## Risks / Trade-offs

- **[Embla v9 en RC]** Embla v9 es release candidate, no stable. La API puede cambiar → Mitigación: si hay breaking changes, quedarse en v8 que es estable y también soporta `axis: 'y'`
- **[Videos en móvil]** Autoplay de videos con sonido está bloqueado en muchos navegadores móviles → Mitigación: todos los videos empiezan muted, el usuario hace unmute explícito
- **[Rendimiento de blur]** `backdrop-filter: blur()` puede ser pesado en GPUs de baja gama → Mitigación: usar `will-change: transform` y limitar el blur a `blur(20px)` como máximo
- **[Web Share API]** No disponible en todos los browsers → Mitigación: fallback a copiar link al portapapeles
- **[Imágenes placeholder]** Las imágenes actuales son placeholder, al reemplazarlas con fotos reales puede cambiar la composición visual → Mitigación: usar la misma proporción 4:3 para consistencia
