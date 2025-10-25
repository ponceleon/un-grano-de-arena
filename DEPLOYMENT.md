# Guía de Deployment - Un Grano de Arena

## 🚀 Opciones de Deployment

Este sitio puede ser desplegado en múltiples plataformas. Todas ofrecen tier gratuito y son muy fáciles de usar.

---

## Opción 1: Netlify (Recomendado)

### Por qué Netlify:
- ✅ Deploy gratuito
- ✅ HTTPS automático
- ✅ CDN global
- ✅ Builds automáticos desde Git
- ✅ Configuración incluida (`netlify.toml`)

### Pasos para Deploy:

1. **Crear cuenta en Netlify**
   - Ve a https://netlify.com
   - Regístrate con GitHub

2. **Conectar repositorio**
   - Click en "Add new site" > "Import an existing project"
   - Selecciona tu repositorio Git

3. **Configurar build**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - (Netlify detectará automáticamente estos valores desde `netlify.toml`)

4. **Deploy**
   - Click en "Deploy site"
   - ¡Listo! Tu sitio estará online en minutos

5. **Configurar dominio personalizado**
   - Ve a "Domain settings"
   - Agrega tu dominio `ungrano.org`
   - Sigue las instrucciones para configurar DNS

---

## Opción 2: Vercel

### Por qué Vercel:
- ✅ Deploy gratuito
- ✅ Excelente performance
- ✅ Edge Network global
- ✅ Configuración incluida (`vercel.json`)

### Pasos para Deploy:

1. **Crear cuenta en Vercel**
   - Ve a https://vercel.com
   - Regístrate con GitHub

2. **Importar proyecto**
   - Click en "Add New Project"
   - Selecciona tu repositorio

3. **Configurar**
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Deploy**
   - Click en "Deploy"
   - ¡Listo!

5. **Dominio personalizado**
   - Ve a Settings > Domains
   - Agrega `ungrano.org`

---

## Opción 3: GitHub Pages

### Pasos para Deploy:

1. **Crear repositorio en GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/un-grano-de-arena.git
   git push -u origin main
   ```

2. **Configurar GitHub Actions**
   - Crear archivo `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         - name: Setup Node
           uses: actions/setup-node@v3
           with:
             node-version: 18
         - name: Install dependencies
           run: npm install
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v1
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v1
   ```

3. **Habilitar GitHub Pages**
   - Ve a Settings > Pages
   - Source: GitHub Actions

---

## Pre-Deployment Checklist

Antes de hacer el deploy final:

### Contenido
- [ ] Agregar todas las imágenes necesarias
- [ ] Revisar y actualizar textos
- [ ] Verificar información de contacto
- [ ] Actualizar enlaces de redes sociales
- [ ] Verificar información bancaria/donaciones

### Técnico
- [ ] Ejecutar `npm run build` localmente sin errores
- [ ] Verificar que todas las páginas carguen correctamente
- [ ] Probar enlaces internos
- [ ] Probar en diferentes navegadores
- [ ] Probar responsividad (móvil, tablet, desktop)

### SEO
- [ ] Verificar meta descriptions en todas las páginas
- [ ] Verificar títulos de páginas
- [ ] Verificar imágenes og:image
- [ ] Actualizar `site` en `astro.config.mjs` con tu dominio real

### Assets
- [ ] Optimizar todas las imágenes
- [ ] Agregar favicon.ico
- [ ] Agregar og-image.jpg para redes sociales

---

## Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Verificar errores
npm run build && npm run preview
```

---

## Configuración de Dominio

### DNS Records para `ungrano.org`:

#### Para Netlify:
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: tu-sitio.netlify.app
```

#### Para Vercel:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Post-Deployment

Después del deploy:

1. **Verificar sitio en producción**
   - Navegar por todas las páginas
   - Verificar enlaces
   - Probar formularios y CTAs

2. **Configurar Analytics**
   - Google Analytics
   - Facebook Pixel (si aplica)
   - Hotjar o similar para heatmaps

3. **Configurar monitoreo**
   - Uptime monitoring (UptimeRobot)
   - Error tracking (Sentry)

4. **SEO**
   - Enviar sitemap a Google Search Console
   - Verificar indexación
   - Configurar Google My Business

5. **Social Media**
   - Verificar Open Graph tags
   - Probar compartir en redes sociales
   - Actualizar enlaces en perfiles sociales

---

## Troubleshooting

### Error: "Build failed"
- Verificar que todas las dependencias estén instaladas
- Revisar errores en la consola
- Asegurarse de que `npm run build` funcione localmente

### Imágenes no cargan
- Verificar rutas de imágenes (deben empezar con `/`)
- Asegurarse de que las imágenes estén en `public/`

### Estilos no se aplican
- Verificar que Tailwind esté configurado correctamente
- Limpiar caché y rebuild: `rm -rf node_modules dist && npm install && npm run build`

---

## Soporte

Si tienes problemas con el deployment:

1. Revisa la documentación de Astro: https://docs.astro.build/
2. Revisa la documentación de tu proveedor (Netlify/Vercel)
3. Contacta al equipo de desarrollo

---

## Mantenimiento

### Updates Regulares
- Actualizar contenido del blog
- Agregar nuevas actividades
- Actualizar informes anuales
- Revisar y actualizar información de programas

### Updates Técnicos
- Actualizar dependencias mensualmente: `npm update`
- Verificar seguridad: `npm audit`
- Mantener Astro actualizado

---

**¡Tu sitio está listo para ser desplegado! 🎉**

