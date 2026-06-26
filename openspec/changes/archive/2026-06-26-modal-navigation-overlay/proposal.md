## Why

Cuando un usuario está en la página de emergencia del terremoto, cualquier clic en un enlace interno (como "Sobre Nosotros" o "Nuestros Programas") lo saca de la página de donación. Esto hace que pierda el foco en la emergencia y reduce las probabilidades de donación. Necesitamos que el usuario pueda explorar el contenido institucional sin salir del home de emergencia.

## What Changes

- Al hacer clic en cualquier enlace interno (Navigation o Footer) que no sea el home, se intercepta la navegación y se abre un modal/overlay
- El modal carga el contenido de la página destino vía fetch y extrae solo el contenido principal (sin header, footer, ni layout)
- El modal tiene un fondo oscuro semitransparente y botón de cerrar (X)
- El modal es responsive (ocupa todo el ancho en mobile, centrado con padding en desktop)
- El home de emergencia permanece visible detrás del modal como fondo
- Al cerrar el modal, el usuario vuelve exactamente donde estaba en el home

## Capabilities

### New Capabilities
- `navigation-overlay`: Sistema de modal que intercepta enlaces internos y carga contenido vía fetch, permitiendo que el usuario explore el sitio sin salir de la página actual

### Modified Capabilities
- *(none)*

## Impact

- `src/components/Navigation.tsx`: Interceptar clics en enlaces internos para mostrar modal
- `src/components/Footer.astro`: Interceptar clics en enlaces internos para mostrar modal
- `src/components/ModalOverlay.tsx` (nuevo): Componente React para el modal con fetch de contenido
- `src/pages/index.astro` y `src/pages/en/index.astro`: Integrar el ModalOverlay y la lógica de intercepción
- Archivos `.astro` del contenido institucional: Cada página necesita que el contenido principal esté envuelto en un contenedor con ID predecible para que el fetch pueda extraerlo
