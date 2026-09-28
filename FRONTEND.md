# 📐 Arquitectura y Estructura Frontend (Vite + React + TS)

Documento técnico de especificación y guía de refactorización para la capa Frontend del portafolio profesional de **Álvaro Gael García Ramírez**.

---

## 1. 🚀 Stack Tecnológico

| Herramienta | Versión / Tipo | Justificación |
| :--- | :--- | :--- |
| **Vite** | Última (v5+) | Bundler ultrarrápido con HMR instantáneo y build optimizado. |
| **React** | v18 / v19 | Biblioteca base para UI declarativa y basada en componentes. |
| **TypeScript** | v5+ | Tipado estricto para modelos de datos (CV), props y estados. |
| **Tailwind CSS** | v3.4+ / v4 | Framework de utilidades CSS para diseño responsivo y dark mode ágil. |
| **Axios** | v1.7+ | Cliente HTTP basado en promesas con soporte de interceptores y tipado. |
| **Lucide React** (Opcional) | Icons | Iconos vectoriales limpios y consistentes. |

---

## 2. 🧬 Metodología: Atomic Design

Para garantizar modularidad, mantenibilidad y escalabilidad, la UI se organiza en las 5 capas del **Diseño Atómico**:

```
src/components/
├── atoms/        # Elementos indivisibles (botones, badges, etiquetas, textos base, toggles)
├── molecules/    # Combinación de 2 o más átomos (ítem de navegación, tarjeta de métrica, tag list)
├── organisms/    # Componentes funcionales autónomos (Navbar, Hero, Timeline, Grid de habilidades)
├── templates/    # Estructura del layout (MainLayout, Header/Main/Footer skeleton sin datos duros)
└── pages/        # Instancia del template inyectando datos reales obtenidos vía Axios
```

---

## 3. 📂 Estructura de Directorios Propuesta

```
frontend/
├── public/
│   ├── assets/
│   │   ├── gael-garcia.jpg
│   │   └── Curriculum-Gael-Garcia.pdf
│   └── favicon.svg
├── src/
│   ├── assets/                 # Estilos globales y recursos estáticos
│   │   └── styles/
│   │       └── index.css       # Directivas Tailwind y variables custom
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   └── Button.types.ts
│   │   │   ├── Icon/
│   │   │   │   └── Icon.tsx
│   │   │   ├── Badge/
│   │   │   │   └── Badge.tsx
│   │   │   ├── Kicker/         # Texto "01 / PERFIL", "02 / EXPERIENCIA", etc.
│   │   │   │   └── Kicker.tsx
│   │   │   ├── BrandLogo/
│   │   │   │   └── BrandLogo.tsx
│   │   │   └── ThemeToggle/
│   │   │       └── ThemeToggle.tsx
│   │   ├── molecules/
│   │   │   ├── NavItem/
│   │   │   │   └── NavItem.tsx
│   │   │   ├── SignalCard/     # Tarjetas métricas rápidas (SISCEN, Ing. Sistemas, Inglés)
│   │   │   │   └── SignalCard.tsx
│   │   │   ├── SkillGroup/     # Categoría de habilidad con sus tags
│   │   │   │   └── SkillGroup.tsx
│   │   │   ├── ContactAction/  # Botones de email / teléfono con iconos
│   │   │   │   └── ContactAction.tsx
│   │   │   └── TimelineItem/   # Elemento individual de experiencia con bullets
│   │   │       └── TimelineItem.tsx
│   │   ├── organisms/
│   │   │   ├── Navbar/
│   │   │   │   └── Navbar.tsx
│   │   │   ├── HeroSection/
│   │   │   │   └── HeroSection.tsx
│   │   │   ├── SignalStrip/
│   │   │   │   └── SignalStrip.tsx
│   │   │   ├── ProfileSection/
│   │   │   │   └── ProfileSection.tsx
│   │   │   ├── ExperienceSection/
│   │   │   │   └── ExperienceSection.tsx
│   │   │   ├── SkillsSection/
│   │   │   │   └── SkillsSection.tsx
│   │   │   ├── EducationSection/
│   │   │   │   └── EducationSection.tsx
│   │   │   ├── ContactSection/
│   │   │   │   └── ContactSection.tsx
│   │   │   └── Footer/
│   │   │       └── Footer.tsx
│   │   └── templates/
│   │       └── PortfolioTemplate.tsx
│   ├── hooks/
│   │   ├── useCV.ts            # Consumo de datos del backend vía Axios con estados de loading/error
│   │   ├── useTheme.ts         # Control de modo claro/oscuro persistido en localStorage
│   │   └── useScrollSpy.ts     # Resaltado del menú según la sección visible
│   ├── services/
│   │   ├── api.ts              # Instancia de Axios configurada con baseURL y timeouts
│   │   └── cvService.ts        # Métodos para obtener el CV completo o secciones específicas
│   ├── types/
│   │   └── cv.types.ts         # Interfaces TypeScript del CV
│   ├── App.tsx                 # Enrutador o componente raíz
│   └── main.tsx                # Entrypoint de Vite
├── index.html
├── tailwind.config.js          # Paleta de colores extraída del diseño actual
├── tsconfig.json
└── vite.config.ts
```

---

## 4. 🏷️ Tipado TypeScript (`src/types/cv.types.ts`)

Mapeo de los datos del portafolio actual:

```typescript
export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  cvPdfUrl: string;
}

export interface ProfileInfo {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  headline: string;
  bio: string;
  avatarUrl: string;
  currentStatus: string;
}

export interface SignalMetric {
  id: string;
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  status: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  description: string;
  capabilities: string;
}

export interface CVData {
  profile: ProfileInfo;
  signals: SignalMetric[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  education: EducationItem;
  language: LanguageItem;
  contact: ContactInfo;
}
```

---

## 5. 🌐 Configuración del Cliente HTTP (Axios)

### `src/services/api.ts`
```typescript
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000/api',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

### `src/services/cvService.ts`
```typescript
import { apiClient } from './api';
import { CVData } from '../types/cv.types';

export const cvService = {
  getFullCV: async (): Promise<CVData> => {
    const response = await apiClient.get<CVData>('/cv');
    return response.data;
  },
};
```

### `src/hooks/useCV.ts`
```typescript
import { useState, useEffect } from 'react';
import { CVData } from '../types/cv.types';
import { cvService } from '../services/cvService';

export const useCV = () => {
  const [data, setData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    cvService.getFullCV()
      .then((cv) => {
        setData(cv);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Error al cargar los datos del CV');
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
```

---

## 6. 🎨 Configuración de Tailwind CSS con Identidad de Marca

Migración exacta de las variables de color del archivo actual `dist/index.html`:

### `tailwind.config.js`
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
        brand: {
          bgLight: '#eef3f7',
          surfaceLight: '#ffffff',
          surfaceSoftLight: '#e7edf3',
          textLight: '#0b1220',
          mutedLight: '#526171',
          lineLight: '#c9d5df',

          bgDark: '#08111d',
          surfaceDark: '#0f1b2a',
          surfaceSoftDark: '#152436',
          textDark: '#f3f7fb',
          mutedDark: '#adbbca',
          lineDark: '#2b3b4e',

          primary: '#175cd3',
          primaryStrong: '#0c3f9f',
          signal: '#00a8a0',
          signalDark: '#59e1d5',
          signalSoft: 'rgba(0, 168, 160, 0.12)',
        },
      },
      fontFamily: {
        body: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Arial Narrow"', '"Roboto Condensed"', 'sans-serif'],
        mono: ['"Cascadia Code"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'portfolio': '22px',
        'portrait': '32px 32px 110px 32px',
      }
    },
  },
  plugins: [],
}
```

---

## 7. 🛠️ Hoja de Ruta para Refactorización

1. **Inicialización**:
   - Crear proyecto con `bun create vite frontend --template react-ts` (o npm/pnpm).
   - Instalar dependencias: `bun add axios lucide-react` y devDependencies `bun add -d tailwindcss postcss autoprefixer`.
2. **Capa Atómica**:
   - Crear átomos base (`Button`, `Badge`, `Kicker`, `ThemeToggle`).
   - Implementar soporte para modo oscuro (`useTheme`).
3. **Capa Molecular y Organismos**:
   - Extraer secciones del HTML a componentes (`HeroSection`, `ProfileSection`, `ExperienceSection`, `SkillsSection`, etc.).
4. **Integración con Axios**:
   - Conectar `useCV` al endpoint del backend.
   - Añadir estados de Skeleton/Loading mientras se reciben los datos.
