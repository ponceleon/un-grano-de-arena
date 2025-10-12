# Configuración de Tipografías - Un Grano de Arena

## Tipografías Corporativas

### Tipografía Primaria: Clone Rounded Latin
- **Uso**: Encabezados (h1, h2, h3, h4, h5, h6)
- **Peso**: Medium (500) únicamente
- **Características**: Fuente invitante, divertida y atemporal, perfecta para una organización que trabaja principalmente con niños
- **Plataformas**: Debe usarse en todas las plataformas para mantener branding consistente

### Tipografía Secundaria: Open Sans Regular
- **Uso**: Texto general, párrafos, botones, elementos secundarios
- **Peso**: Todos los pesos disponibles (300, 400, 500, 600, 700, 800)
- **Características**: Fuente atemporal, gratuita para uso comercial
- **Plataformas**: Debe usarse en todas las plataformas para mantener branding consistente

## Configuración Actual

✅ **Open Sans**: Ya está configurada y funcional a través de Google Fonts

⚠️ **Clone Rounded Latin**: Requiere configuración de Adobe Fonts

## Cómo Configurar Clone Rounded Latin (Adobe Fonts)

### Paso 1: Crear Cuenta en Adobe Fonts
1. Ve a [https://fonts.adobe.com](https://fonts.adobe.com)
2. Inicia sesión con tu cuenta de Adobe (o crea una si no tienes)
3. Puedes usar la prueba gratuita o una suscripción de Creative Cloud

### Paso 2: Buscar y Agregar Clone Rounded Latin
1. Busca "Clone Rounded Latin" en Adobe Fonts
2. O ve directamente a: [https://fonts.adobe.com/fonts/clone-rounded](https://fonts.adobe.com/fonts/clone-rounded)
3. Haz clic en "Add to Web Project" o "Agregar a proyecto web"

### Paso 3: Crear Proyecto Web
1. Crea un nuevo proyecto web o selecciona uno existente
2. **Importante**: Selecciona únicamente el peso **Medium (500)**
3. Dale un nombre a tu proyecto (ej: "Un Grano de Arena Website")

### Paso 4: Obtener el Código de Inserción
1. Una vez agregada la fuente, Adobe te proporcionará un código `<link>`
2. Se verá similar a:
   ```html
   <link rel="stylesheet" href="https://use.typekit.net/abc1234.css">
   ```
3. Copia este código

### Paso 5: Actualizar el Proyecto
1. Abre el archivo `src/layouts/Layout.astro`
2. Busca el comentario `<!-- TODO: Configurar Adobe Fonts para Clone Rounded Latin -->`
3. Pega el código `<link>` de Adobe Fonts debajo de ese comentario
4. Ejemplo:
   ```html
   <!-- TODO: Configurar Adobe Fonts para Clone Rounded Latin -->
   <link rel="stylesheet" href="https://use.typekit.net/abc1234.css">
   ```

### Paso 6: Actualizar Tailwind Config (si es necesario)
1. Abre `tailwind.config.mjs`
2. En la línea de `heading`, verifica que el nombre de la fuente coincida con el nombre que Adobe Fonts usa
3. Adobe Fonts puede usar un nombre como `clone-rounded` o `clone-rounded-latin`
4. Actualiza si es necesario:
   ```javascript
   heading: ['clone-rounded', 'Quicksand', 'sans-serif'],
   ```

### Paso 7: Probar
1. Reinicia el servidor de desarrollo si está corriendo
2. Verifica que los encabezados muestren Clone Rounded Latin
3. Puedes verificar en las herramientas de desarrollo del navegador (inspeccionar elemento)

## Fuente de Respaldo Temporal

Mientras configuras Adobe Fonts, el proyecto usa **Quicksand** (peso 500) como fuente de respaldo. Esta es una fuente redondeada similar disponible en Google Fonts.

Una vez que configures Clone Rounded Latin correctamente, esta será la fuente principal y Quicksand solo se usará como respaldo si hay problemas de carga.

## Verificación de Implementación

### Encabezados (h1-h6)
- ✅ Deben usar Clone Rounded Latin
- ✅ Peso: Medium (500)
- ✅ Respaldo temporal: Quicksand

### Texto General
- ✅ Debe usar Open Sans
- ✅ Todos los pesos disponibles
- ✅ Ya configurado y funcional

### Botones y Componentes
- ✅ Heredan de font-sans (Open Sans)
- ✅ Pueden usar diferentes pesos según necesidad

## Archivos Modificados

1. **src/styles/global.css**
   - Actualizado import de fuentes
   - Cambiado peso de encabezados a medium (500)

2. **tailwind.config.mjs**
   - Actualizada configuración de fontFamily
   - font-sans: Open Sans
   - font-heading: Clone Rounded Latin (con Quicksand como respaldo)

3. **src/layouts/Layout.astro**
   - Agregados enlaces a fuentes
   - Agregadas instrucciones para Adobe Fonts
   - Incluido Quicksand como respaldo temporal

## Preguntas Frecuentes

### ¿Por qué necesito Adobe Fonts?
Clone Rounded Latin es una fuente comercial distribuida por Rosetta Type Foundry y está disponible a través de Adobe Fonts. No está disponible en Google Fonts.

### ¿Hay algún costo?
Adobe Fonts viene incluido con las suscripciones de Creative Cloud. También hay una prueba gratuita disponible.

### ¿Puedo usar una alternativa gratuita?
Sí, Quicksand está configurada como respaldo y es visualmente similar. Sin embargo, para mantener la identidad de marca exacta, se recomienda usar Clone Rounded Latin como se especifica en las guías de marca.

### ¿Qué pasa si no configuro Adobe Fonts?
El sitio funcionará perfectamente con Quicksand como fuente de respaldo. Visualmente será muy similar, pero no será la fuente corporativa exacta.

## Soporte

Si tienes problemas configurando las fuentes, verifica:
1. Que tu suscripción de Adobe Fonts esté activa
2. Que el dominio del proyecto esté permitido en Adobe Fonts
3. Que el código de inserción esté correctamente pegado en Layout.astro
4. Que el nombre de la fuente en tailwind.config.mjs coincida con el de Adobe Fonts

---

**Última actualización**: Octubre 2025

