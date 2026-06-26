## Context

Actualmente el home es una single-page institucional con hero, quiénes somos, visión/misión, programas, equipo y CTA de donación. El flujo de donación es un enlace directo a PayPal.me sin montos predefinidos ni opciones. Se necesita transformar el home en una landing de emergencia para el terremoto de Venezuela con un widget de donación embebido que soporte dos métodos de pago: Zelle (QR) y PayPal (paypal.me con parámetro de monto).

El sitio usa Astro 5 con Tailwind CSS 3, React 19 (solo para Navigation), i18n manual basado en archivos TS, y despliegue en Netlify.

## Goals / Non-Goals

**Goals:**
- Home rediseñado como landing page de emergencia con hero de crisis
- Widget de donación con selector de método (Zelle/PayPal), montos predefinidos, y fee covering
- Contador de donantes manual persistido en JSON con fecha de última actualización
- Contenido institucional existente migrado a `/nosotros` con enlace en footer
- Soporte completo ES/EN con el mismo sistema de i18n actual

**Non-Goals:**
- Integración en tiempo real con pasarelas de pago (el contador es manual)
- Autenticación de usuarios
- Páginas individuales de programas (se migran como bloque)
- Cambios en el sistema de colores, tipografía o layout global

## Decisions

1. **DonationWidget como React component** (no Astro): El widget necesita estado interactivo (selección de monto, toggle Zelle/PayPal, cálculo de fee). React es más adecuado que Astro para esto. Se crea `DonationWidget.tsx` en `src/components/`.

2. **Contador en JSON estático**: `src/data/donations.json` con estructura `{ count: number, lastUpdated: "2025-06-26" }`. Se actualiza manualmente. El componente lo importa estáticamente en build time. Esto evita backend.

3. **PayPal.me con montos predefinidos**: Cada botón de monto construye `https://www.paypal.com/paypalme/ungrano/<monto>` (ej. `/50000` para $50.00 sin decimales). PayPal maneja el resto.

4. **Zelle con QR**: Al seleccionar Zelle, el widget muestra una imagen `public/images/qr-zelle.jpg` con instrucciones. No hay integración API.

5. **Fee covering**: Checkbox que suma 2.9% + $0.30 (tarifa típica PayPal) al monto base. El cálculo se hace en cliente. Si el usuario selecciona Zelle, se oculta esta opción.

6. **Contenido institucional en `/nosotros`**: Se crea `src/pages/nosotros/index.astro` y `src/pages/en/nosotros/index.astro` copiando la estructura actual del home. Footer tiene enlace `target="_blank"`.

7. **Hero de emergencia**: Componente `EmergencyHero.astro` con fondo, texto de crisis, y el widget de donación justo debajo (todo above the fold).

## Risks / Trade-offs

- **[Contador manual]** → Puede quedar desactualizado si no se actualiza diario. Mitigación: mostrar fecha de última actualización prominentemente.
- **[PayPal sin confirmación]** → No sabemos si la donación se completó. El contador se actualiza manualmente con estimaciones.
- **[QR Zelle estático]** → Si cambia la cuenta, hay que reemplazar la imagen manualmente.
- **[SEO del home]** → El home pierde contenido rico institucional. Mitigación: la página `/nosotros` tiene el contenido completo para SEO.
- **[i18n duplicada]** → El widget y el hero necesitan nuevas traducciones. Se añaden al sistema existente sin romperlo.