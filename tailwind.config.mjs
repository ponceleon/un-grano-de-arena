/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Amarillo - Color principal de UGDA
        primary: {
          50: '#fef9e7',
          100: '#fdf1c3',
          200: '#fce89a',
          300: '#fbde71',
          400: '#f9d048',
          500: '#f1b71c', // Color corporativo principal
          600: '#d19e17',
          700: '#a37d12',
          800: '#765b0d',
          900: '#483808',
          950: '#2d2305',
        },
        // Azul - Color secundario
        secondary: {
          50: '#f0f9fb',
          100: '#e1f3f7',
          200: '#c3e7ef',
          300: '#a5dbe7',
          400: '#98cdd8', // Color corporativo secundario
          500: '#7bb5c3',
          600: '#5e9dad',
          700: '#4a7a87',
          800: '#365761',
          900: '#22343b',
          950: '#0e1416',
        },
        // Naranja - Color de acento
        accent: {
          50: '#fef4e7',
          100: '#fee8cf',
          200: '#fdd19f',
          300: '#fbba6f',
          400: '#f9a33f',
          500: '#f18721', // Color corporativo naranja
          600: '#c66d1b',
          700: '#9a5515',
          800: '#6f3d0f',
          900: '#432509',
          950: '#180c03',
        },
        // Rojo - Para alertas y CTAs importantes
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4242', // Color corporativo rojo
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // Café/Marrón - Para textos y elementos
        brown: {
          50: '#f7f5f3',
          100: '#ebe6e1',
          200: '#d7cdc3',
          300: '#c3b4a5',
          400: '#af9b87',
          500: '#684f3b', // Color corporativo café
          600: '#553f2f',
          700: '#423023',
          800: '#2f2017',
          900: '#1c100b',
          950: '#090604',
        },
        // Azul claro adicional
        blue: {
          50: '#f0f9fb',
          100: '#e1f3f7',
          200: '#c3e7ef',
          300: '#a5dbe7',
          400: '#98cdd8', // Color corporativo azul
          500: '#7bb5c3',
          600: '#5e9dad',
          700: '#4a7a87',
          800: '#365761',
          900: '#22343b',
          950: '#0e1416',
        },
      },
      fontFamily: {
        // Open Sans - Tipografía secundaria para texto general (todos los pesos)
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        // Clone Rounded Latin - Tipografía primaria (peso medium)
        // Nota: Cuando configures Adobe Fonts, usa 'clone-rounded', 'sans-serif'
        heading: ['Clone Rounded Latin', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


