## Context

La página de emergencia (home) tiene enlaces de navegación que actualmente redirigen a `/nosotros/` con diferentes anchors. Al hacer clic, el usuario sale completamente del flujo de donación. El sitio es estático (Astro, no SPA), por lo que no hay una forma nativa de navegación sin recarga.

## Goals / Non-Goals

**Goals:**
- Interceptar clics en enlaces internos (Navigation, Footer) desde el home de emergencia
- Abrir un modal con el contenido de la página destino cargado vía fetch
- El modal debe ser funcional en ambos idiomas (ES/EN)
- El modal debe cerrarse con botón X, clic fuera del modal, o tecla Escape
- El contenido del modal debe mantener el scroll interno (no scroll del body)

**Non-Goals:**
- No se modifica la navegación en la página `/nosotros/` (solo aplica en el home de emergencia)
- No se modifica el comportamiento de enlaces externos (PayPal, redes sociales)
- No se implementa un SPA o router completo
- No se modifican las páginas de contenido institucional (solo añadir wrapper con ID)

## Decisions

1. **ModalOverlay como React component**: Se necesita estado para controlar apertura/cierre y el contenido cargado. React es ideal para esto. Se crea `ModalOverlay.tsx`.

2. **Fetch de contenido**: Al interceptar un clic, se previene la navegación por defecto, se hace `fetch(url)` y se extrae el contenido del contenedor `#main-content` del HTML resultante. Este ID se añade al `<main>` de las páginas institucionales.

3. **Intercepción de enlaces**: Se usa un event listener con event delegation. Se añade al mount del ModalOverlay un listener que captura clics en `a[href^="/"]` (enlaces internos relativos). Si el enlace es externo (comienza con http) o es el home mismo, no se intercepta.

4. **Decoración de enlaces en Footer**: Footer.astro renderiza enlaces. Los enlaces internos se interceptan por el listener global, no necesitan modificación. Pero necesito asegurarme de que Footer.astro use `<a>` tags normales.

5. **Animación**: El modal usa transiciones CSS (fade in/out) con clases Tailwind para suavidad.

6. **Scroll lock**: Cuando el modal está abierto, `overflow: hidden` en el body para evitar scroll del fondo.

## Risks / Trade-offs

- **[Fetch de HTML completo]** → La página `/nosotros/` incluye header, footer y layout que se descartan. El fetch es ligero (página estática). Mitigación: mínimo impacto.
- **[Ruta relativa vs absoluta]** → Los enlaces usan rutas relativas como `/nosotros/#programas`. El fetch necesita la ruta base sin anchor. Se parsea la URL para obtener solo el path.
- **[SEO no afectado]** → Esto es solo comportamiento client-side. Las páginas siguen existiendo como HTML estático para crawlers.
- **[Caché del navegador]** → Las páginas ya generadas en `dist/` se cachean naturalmente. El fetch será rápido.
- **[Links ancla (#)]** → Los anchors dentro del modal no funcionarán vía fetch directo. Se requiere scroll manual al anchor después de cargar el contenido. Alternativa: parsear el anchor y hacer scroll en el modal.