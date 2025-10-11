# Un Grano de Arena - Sitio Web

Sitio web oficial de la fundación **Un Grano de Arena**, una organización sin fines de lucro que acompaña en su proceso de florecimiento humano a las personas en situación de vulnerabilidad.

## 🚀 Tecnologías

- **Astro 5.x** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **React** - Componentes interactivos
- **TypeScript** - Tipado estático
- **Lucide React** - Iconos

## 📋 Estructura del Proyecto

```
/
├── public/
│   ├── images/
│   │   ├── team/          # Fotos del equipo
│   │   ├── aliados/       # Logos de aliados
│   │   └── programas/     # Imágenes de programas
│   └── favicon.svg
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── data/             # Datos (equipo, aliados, programas)
│   ├── layouts/          # Layouts de páginas
│   ├── pages/            # Páginas del sitio
│   └── styles/           # Estilos globales
└── package.json
```

## 🎨 Sistema de Diseño

### Colores

- **Primario (Verde)**: `primary-*` - Naturaleza, crecimiento, esperanza
- **Secundario (Naranja)**: `secondary-*` - Energía, optimismo
- **Acento (Azul)**: `accent-*` - Confianza, estabilidad

### Tipografía

- **Títulos**: Poppins (font-heading)
- **Cuerpo**: Inter (font-sans)

### Componentes Base

- `Button` - Botones con variantes primary, secondary, outline
- `Card` - Tarjetas de contenido
- `Section` - Secciones de página
- `Header` - Navegación principal
- `Footer` - Pie de página
- `Navigation` - Menú responsive

## 📄 Páginas Implementadas

### ✅ Fase 1, 2 y 3 Completadas

- **Inicio** (`/`) - Hero, Visión/Misión, Programas, Equipo, Testimonios, CTA
- **Nosotros** (`/nosotros`) - Información institucional
- **Equipo** (`/nosotros/equipo`) - Miembros del equipo
- **Aliados** (`/nosotros/aliados`) - Organizaciones aliadas

### 🔄 Pendientes (Fases 4-7)

- Página de Programas (`/programas`)
- Páginas individuales de cada programa
- Recetario (`/recetario`)
- Ponte Derecha (`/ponte-derecha`)
- Informes Anuales (`/informes`)
- Página de Donaciones (`/donar`)

## 🛠️ Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 🖼️ Imágenes Necesarias

Ver archivo `IMAGENES_NECESARIAS.md` para la lista completa de imágenes que se deben agregar al proyecto.

## 📝 Datos a Actualizar

Los siguientes archivos contienen datos que deben ser revisados y actualizados:

- `src/data/team.ts` - Información del equipo
- `src/data/aliados.ts` - Información de aliados
- `src/data/programas.ts` - Información de programas

## 🌐 Deployment

Este proyecto puede ser desplegado en:

- **Netlify** (recomendado)
- **Vercel**
- **GitHub Pages**
- Cualquier hosting que soporte sitios estáticos

### Deploy en Netlify

```bash
npm run build
# La carpeta dist/ contiene el sitio listo para producción
```

## 📧 Contacto

- **Email**: info@ungrano.org
- **Web**: https://ungrano.org/

## 📄 Licencia

© Un Grano de Arena. Todos los derechos reservados.

---

**Desarrollado con ❤️ para construir la paz positiva**
