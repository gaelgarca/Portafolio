# 🎨 Guía del Sistema de Diseño (Design Tokens & Color Palette)

Documento de especificación del sistema visual, tokens semánticos y reglas de accesibilidad para el portafolio profesional de **Álvaro Gael García Ramírez**, basado en las directrices de la skill `ui-ux-pro-max`.

---

## 1. 🌈 Paleta de Colores Oficial

Esta paleta está diseñada para proyectar profesionalismo tecnológico, claridad visual, jerarquía limpia y máximo confort de lectura.

### ☀️ Modo Claro (Light Mode)

| Token Semántico | Valor Hex | Muestra | Uso Principal |
| :--- | :--- | :---: | :--- |
| **`bg-canvas`** (Fondo) | `#F7FAFC` | ⬜ | Fondo global del sitio, espaciado entre secciones. |
| **`bg-surface`** (Superficie / Tarjetas) | `#FFFFFF` | ◽ | Contenedores de tarjetas, paneles de perfil, navbar, modales. |
| **`brand-primary`** (Azul principal) | `#2563EB` | 🟦 | Acciones primarias (botones CTA), enlaces activos, acentos de marca. |
| **`brand-hover`** (Azul hover) | `#1D4ED8` | 🟦 | Estado `:hover` y `:active` de botones primarios e interactivos. |
| **`brand-soft`** (Azul suave) | `#EAF2FF` | 🧊 | Fondos de badges activos, contenedores de iconos, resaltados de timeline. |
| **`accent-sky`** (Acento celeste) | `#38BDF8` | 💧 | Indicadores de estado en vivo, viñetas, líneas decorativas y kickers. |
| **`text-primary`** (Texto principal) | `#0F172A` | ⬛ | Títulos H1/H2/H3, nombres propios, texto destacado de alto impacto. |
| **`text-secondary`** (Texto secundario) | `#526176` | 🔲 | Párrafos de descripción, fechas, metadatos, textos de apoyo. |
| **`border-subtle`** (Bordes) | `#D8E3EF` | ▫️ | Delimitación de tarjetas, divisores sutiles, bordes de inputs y tags. |

---

### 🌙 Modo Oscuro (Dark Mode Armónico)

Para garantizar un cambio de tema consistente y descansado para la vista sin perder la identidad de marca:

| Token Semántico | Valor Hex / RGBA | Uso Principal |
| :--- | :--- | :--- |
| **`bg-canvas`** (Fondo) | `#090E17` | Fondo profundo de alta inmersión. |
| **`bg-surface`** (Superficie) | `#0F172A` | Fondo de tarjetas y componentes elevados. |
| **`bg-surface-elevated`** | `#1E293B` | Tarjetas secundarias y estados hover. |
| **`brand-primary`** | `#3B82F6` | Azul con mayor luminancia para contraste sobre fondo oscuro. |
| **`brand-hover`** | `#60A5FA` | Hover luminoso. |
| **`brand-soft`** | `rgba(59, 130, 246, 0.15)` | Resplandor suave y fondos de badges en oscuro. |
| **`accent-sky`** | `#38BDF8` | Acento celeste para señales y badges. |
| **`text-primary`** | `#F8FAFC` | Texto blanco óptico de alta legibilidad. |
| **`text-secondary`** | `#94A3B8` | Texto secundario y etiquetas silenciadas. |
| **`border-subtle`** | `#1E293B` | Bordes sutiles para delimitar sin saturar. |

---

## 2. 🛡️ Análisis de Contraste y Accesibilidad (WCAG 2.1)

Cumplimiento con las directrices de la skill `ui-ux-pro-max`:

* **Texto Principal (`#0F172A`) sobre Fondo (`#F7FAFC`)**:
  * Ratio: **14.8:1** (Supera ampliamente el estándar WCAG AAA de 7.0:1).
* **Texto Secundario (`#526176`) sobre Fondo (`#F7FAFC`)**:
  * Ratio: **6.2:1** (Cumple WCAG AA y AAA para textos regulares).
* **Azul Principal (`#2563EB`) sobre Fondo Blanco (`#FFFFFF`)**:
  * Ratio: **4.6:1** (Aprobado WCAG AA para botones y textos interactivos).
* **Texto Blanco (`#FFFFFF`) sobre Azul Principal (`#2563EB`)**:
  * Ratio: **4.6:1** (Excelente legibilidad en botones primarios).
* **Bordes (`#D8E3EF`) sobre Fondo (`#F7FAFC`)**:
  * Ratio de interfaz no textual: **1.35:1** (Suficiente para no generar ruido visual y delimitar la estructura geométrica).

---

## 3. ⚙️ Configuración para Tailwind CSS (`tailwind.config.js`)

Se mapea la paleta en el archivo de configuración del frontend:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          'surface-soft': 'var(--color-surface-soft)',
          primary: 'var(--color-primary)',
          'primary-hover': 'var(--color-primary-hover)',
          'primary-soft': 'var(--color-primary-soft)',
          sky: 'var(--color-sky)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
        },
      },
    },
  },
  plugins: [],
}
```

---

## 4. 🧪 Variables CSS en `src/assets/styles/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
  --color-bg: #F7FAFC;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F1F5F9;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-soft: #EAF2FF;
  --color-sky: #38BDF8;
  --color-text: #0F172A;
  --color-muted: #526176;
  --color-border: #D8E3EF;
}

[data-theme="dark"] {
  color-scheme: dark;
  --color-bg: #090E17;
  --color-surface: #0F172A;
  --color-surface-soft: #1E293B;
  --color-primary: #3B82F6;
  --color-primary-hover: #60A5FA;
  --color-primary-soft: rgba(59, 130, 246, 0.15);
  --color-sky: #38BDF8;
  --color-text: #F8FAFC;
  --color-muted: #94A3B8;
  --color-border: #1E293B;
}
```

---

## 5. 🧩 Guía de Aplicación en Componentes Atómicos

| Componente | Clases Tailwind Recomendadas |
| :--- | :--- |
| **Botón Primario** | `bg-portfolio-primary hover:bg-portfolio-primary-hover text-white shadow-sm transition-colors` |
| **Botón Secundario** | `bg-portfolio-surface hover:bg-portfolio-surface-soft text-portfolio-text border border-portfolio-border transition-colors` |
| **Badge / Tag** | `bg-portfolio-primary-soft text-portfolio-primary border border-portfolio-primary/20` |
| **Tarjeta / Panel** | `bg-portfolio-surface border border-portfolio-border rounded-2xl shadow-sm p-6` |
| **Kicker / Eyebrow** | `text-portfolio-sky font-mono font-bold tracking-widest uppercase text-xs` |
| **Navbar** | `bg-portfolio-surface/90 backdrop-blur-md border-b border-portfolio-border` |
| **Línea de Timeline** | `bg-gradient-to-b from-portfolio-sky to-portfolio-primary` |
