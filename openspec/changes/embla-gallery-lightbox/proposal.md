## Why

La galería actual en WhyDonateOption3.astro muestra 6 imágenes pequeñas (aspect-video en grid de 6 columnas) que no invitan a la interacción y no transmiten la urgencia ni el impacto emocional de la crisis. Las imágenes y videos son el vehículo principal para conectar emocionalmente con los donantes — necesitan ser protagonistas. Un lightbox full-screen con swipe vertical tipo Shorts, similar al de FIFA Moments, permite explorar cada imagen o video a pantalla completa con contexto (título, descripción) y herramientas de interacción (like, compartir).

## What Changes

- **Agrandar las imágenes de la galería** en WhyDonateOption3.astro: de `aspect-video` en grid de 6 a un grid de 2-3 columnas con imágenes más grandes y protagonistas
- **Crear GalleryLightbox.tsx**: componente React que envuelve Embla Carousel con eje vertical para navegación tipo Shorts
- **Soporte de imágenes y videos**: el lightbox renderiza `<img>` para fotos y `<video>` con controles (play/pausa, mute/unmute) para videos
- **Overlay con metadata**: título, descripción, botón de like, botón de compartir (Web Share API), botón de cerrar, y para videos: botón de mute
- **Fondo blur**: el slide activo se muestra como fondo borroso detrás del contenido (como FIFA)
- **Click en thumbnail → abre lightbox**: cada imagen de la galería abre el lightbox en la posición correspondiente
- **Navegación**: swipe vertical touch, rueda del mouse (wheel gestures), teclado (flechas arriba/abajo), Escape para cerrar
- **Animaciones**: fadeIn del overlay, transición suave entre slides
- **Integración con i18n**: títulos y descripciones de cada slide obtenidos de archivos de traducción

## Capabilities

### New Capabilities
- `gallery-lightbox`: Componente de lightbox full-screen con navegación vertical tipo Shorts, soporte de imágenes y videos, y overlay de metadata interactiva

### Modified Capabilities
- `why-donate-gallery`: Se modifica el layout de Option 3 para que las imágenes sean más grandes y protagonistas, y se añade la capacidad de abrir cada imagen en el lightbox

## Impact

- **Nuevo componente React**: `src/components/gallery/GalleryLightbox.tsx`
- **Nueva dependencia**: `embla-carousel`, `embla-carousel-react`, `embla-carousel-wheel-gestures`
- **Modificación**: `src/components/gallery/WhyDonateOption3.astro` — layout de imágenes más grandes + integración con lightbox
- **Nuevo tipo de datos**: `GallerySlide` interface (src, type, title, description, alt, likes, shares)
- **i18n**: Nuevas keys para títulos y descripciones de cada slide en `src/i18n/es.ts` y `src/i18n/en.ts`
- **Sin cambios en otros componentes**: Option 1, 2, 4 no se modifican
