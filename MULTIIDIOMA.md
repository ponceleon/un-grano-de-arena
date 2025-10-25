# Sistema Multiidioma - Un Grano de Arena

## 📚 Descripción

Este proyecto ahora cuenta con un sistema completo de internacionalización (i18n) que soporta **Español** e **Inglés**.

## 🌍 Idiomas Disponibles

- **Español (es)** - Idioma por defecto
- **English (en)** - Idioma alternativo

## 📁 Estructura de Archivos

```
src/
├── i18n/
│   ├── index.ts        # Utilidades y configuración i18n
│   ├── es.ts           # Traducciones en español
│   └── en.ts           # Traducciones en inglés
├── pages/
│   ├── index.astro     # Página principal en español (/)
│   └── en/
│       └── index.astro # Página principal en inglés (/en)
└── components/
    └── ...             # Todos los componentes aceptan prop 'lang'
```

## 🔧 Configuración

### astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://ungrano.org',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // La ruta raíz (/) usa español
    },
  },
  // ...
});
```

## 💻 Uso en Componentes

### Componente Astro

```astro
---
import type { Language } from '../i18n';
import { getTranslations } from '../i18n';

interface Props {
  lang?: Language;
}

const { lang = 'es' } = Astro.props;
const t = getTranslations(lang);
---

<h1>{t.hero.title}</h1>
<p>{t.hero.subtitle}</p>
```

### Componente React (Navigation.tsx)

```tsx
import type { Language } from '../i18n';
import { getTranslations } from '../i18n';

interface Props {
  lang?: Language;
}

export default function Component({ lang = 'es' }: Props) {
  const t = getTranslations(lang);
  
  return <h1>{t.nav.inicio}</h1>;
}
```

## 🗂️ Estructura de Traducciones

Las traducciones están centralizadas en `src/i18n/es.ts` y `src/i18n/en.ts`:

```typescript
export const es = {
  site: {
    title: "Un Grano de Arena - Juntos Florecemos",
    description: "...",
  },
  nav: {
    inicio: "Inicio",
    sobreNosotros: "Sobre Nosotros",
    // ...
  },
  hero: {
    title: "Un Grano de Arena",
    subtitle: "Nadie florece solo",
    // ...
  },
  programas: [
    {
      id: "granos-sobre-ruedas",
      title: "Granos sobre Ruedas",
      description: "...",
      // ...
    },
    // ...
  ],
  // ...
};
```

## 🌐 Rutas

- **Español (por defecto):**
  - `/` - Página principal en español
  
- **Inglés:**
  - `/en` - Página principal en inglés

## 🎨 Selector de Idioma

El componente `Navigation.tsx` incluye un selector de idioma que:

1. Muestra el idioma actual con un ícono de globo terráqueo
2. Permite cambiar entre español e inglés
3. Mantiene el contexto de la página actual al cambiar de idioma
4. Es responsive (diseño diferente en móvil y desktop)

### Desktop
- Botón con ícono de globo y código del idioma (ES/EN)
- Menú desplegable al hacer click

### Mobile
- Integrado en el menú hamburguesa
- Botones para cada idioma

## ✨ Funcionalidades

### getTranslations(lang)
Obtiene las traducciones para un idioma específico.

```typescript
const t = getTranslations('es');
console.log(t.hero.title); // "Un Grano de Arena"
```

### getLanguageFromURL(pathname)
Detecta el idioma de la URL actual.

```typescript
const lang = getLanguageFromURL('/en/nosotros'); // 'en'
```

### getLocalizedPath(path, lang)
Genera una ruta localizada.

```typescript
getLocalizedPath('/', 'en');     // '/en'
getLocalizedPath('/', 'es');     // '/'
getLocalizedPath('/about', 'en'); // '/en/about'
```

## 📝 Agregar Nuevas Traducciones

1. **Agregar texto en español** (`src/i18n/es.ts`):
```typescript
export const es = {
  // ...
  nuevoComponente: {
    titulo: "Mi Título",
    descripcion: "Mi Descripción",
  },
};
```

2. **Agregar texto en inglés** (`src/i18n/en.ts`):
```typescript
export const en: Translation = {
  // ...
  nuevoComponente: {
    titulo: "My Title",
    descripcion: "My Description",
  },
};
```

3. **Usar en componente**:
```astro
---
const { lang = 'es' } = Astro.props;
const t = getTranslations(lang);
---

<h1>{t.nuevoComponente.titulo}</h1>
<p>{t.nuevoComponente.descripcion}</p>
```

## 🚀 Agregar Más Páginas Multiidioma

Para crear una nueva página en ambos idiomas:

1. **Crear página en español**: `src/pages/nueva-pagina.astro`
2. **Crear página en inglés**: `src/pages/en/nueva-pagina.astro`
3. **Usar las traducciones** en ambas páginas:

```astro
---
import Layout from '../layouts/Layout.astro';
import { getTranslations } from '../i18n';

const lang = 'es'; // o 'en' para la versión en inglés
const t = getTranslations(lang);
---

<Layout lang={lang} title={t.site.title}>
  <!-- Contenido -->
</Layout>
```

## 🔍 TypeScript

El sistema incluye tipado completo:

```typescript
// Language es un tipo literal
type Language = 'es' | 'en';

// Translation incluye toda la estructura de traducciones
type Translation = typeof es;
```

Esto proporciona autocompletado y validación en tiempo de desarrollo.

## 🎯 Ventajas del Sistema

1. ✅ **Centralización**: Todo el contenido en archivos i18n
2. ✅ **Type-safe**: TypeScript garantiza consistencia
3. ✅ **Escalable**: Fácil agregar más idiomas
4. ✅ **SEO-friendly**: URLs separadas por idioma
5. ✅ **Mantenible**: Cambios en un solo lugar
6. ✅ **DX**: Autocompletado en el editor

## 📌 Notas Importantes

- El español es el idioma por defecto (no requiere prefijo en la URL)
- Todos los componentes deben aceptar la prop `lang?: Language`
- Las traducciones deben mantener la misma estructura en ambos idiomas
- El tipo `Translation` garantiza que `en.ts` tenga la misma estructura que `es.ts`

## 🆕 Agregar un Nuevo Idioma (ej: Francés)

1. Crear `src/i18n/fr.ts` con la estructura de `Translation`
2. Actualizar `src/i18n/index.ts`:
```typescript
import { fr } from './fr';

export const languages = {
  es: 'Español',
  en: 'English',
  fr: 'Français',
};

export const ui = {
  es,
  en,
  fr,
} as const;
```

3. Actualizar `astro.config.mjs`:
```javascript
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en', 'fr'],
  // ...
}
```

4. Crear páginas en `src/pages/fr/`

---

## 📞 Soporte

Para preguntas o mejoras al sistema multiidioma, consulta la documentación de [Astro i18n](https://docs.astro.build/en/guides/internationalization/).

