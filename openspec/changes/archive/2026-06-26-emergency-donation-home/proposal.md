## Why

Un terremoto en Venezuela ha creado una emergencia humanitaria que requiere una respuesta inmediata. El sitio actual de Un Grano de Arena presenta un hero institucional y el contenido de donación queda relegado al final de la página. Necesitamos transformar el home en un punto de donación de emergencia directo, simple y urgente, manteniendo el contenido institucional existente en una subpágina accesible.

## What Changes

- El home actual se convierte en una landing page de emergencia centrada en la donación
- Sección hero rediseñada con mensaje de emergencia del terremoto en Venezuela (ES/EN)
- Widget de donación con dos métodos de pago: Zelle (QR code) y PayPal (paypal.me con montos preconfigurados)
- Montos predefinidos: botones seleccionables con valores fijos
- Checkbox para cubrir comisiones de transacción
- Sección "Por qué donar" debajo del widget con texto emotivo en ambos idiomas
- Contador de donantes manual (JSON con última fecha de actualización)
- Contenido existente del home (Quiénes Somos, Visión/Misión, Programas, Equipo, CTA) se migra a `/nosotros` con enlace en el footer
- Footer actualizado con enlace a la página institucional
- Soporte completo de español e inglés

## Capabilities

### New Capabilities
- `emergency-donation-widget`: Widget de donación embebido en el home con selección de método de pago (Zelle/PayPal), montos predefinidos, fee covering, y contador de donantes
- `donation-counter`: Sistema manual de contador de donaciones persistido en JSON con fecha de última actualización

### Modified Capabilities
- *(none - no existing specs to modify)*

## Impact

- `src/pages/index.astro` y `src/pages/en/index.astro`: Rediseño completo del home
- Nuevo componente: `DonationWidget.astro` o `DonationWidget.tsx` (React si necesita interactividad)
- Nuevo componente: `EmergencyHero.astro`
- Nuevo componente: `WhyDonate.astro`
- Nueva página: `src/pages/nosotros/` y `src/pages/en/nosotros/` con el contenido actual del home
- `src/data/donations.json`: Archivo JSON para el contador de donaciones
- `src/i18n/es.ts` y `src/i18n/en.ts`: Nuevas traducciones para emergencia
- `src/components/Footer.astro`: Enlace a la nueva página institucional
- Imagen QR para Zelle en `public/images/qr-zelle.jpg`
