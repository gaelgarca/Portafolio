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
          // Paleta oficial (Modo Claro)
          bgLight: '#F7FAFC',                 // Fondo
          surfaceLight: '#FFFFFF',            // Superficie / tarjetas
          surfaceSoftLight: '#EAF2FF',        // Azul suave
          textLight: '#0F172A',               // Texto principal
          mutedLight: '#526176',              // Texto secundario
          lineLight: '#D8E3EF',               // Bordes
          primary: '#2563EB',                 // Azul principal
          primaryStrong: '#1D4ED8',           // Azul hover
          primarySoft: '#EAF2FF',             // Azul suave
          signal: '#38BDF8',                  // Acento celeste
          signalDark: '#38BDF8',              // Acento celeste consistente
          signalSoft: 'rgba(56, 189, 248, 0.14)',
          signalSoftDark: 'rgba(56, 189, 248, 0.18)',

          // Paleta oficial (Modo Oscuro armónico)
          bgDark: '#090E17',
          surfaceDark: '#0F172A',
          surfaceSoftDark: '#1E293B',
          textDark: '#F8FAFC',
          mutedDark: '#94A3B8',
          lineDark: '#1E293B',
          primaryDark: '#3B82F6',
          primaryHoverDark: '#60A5FA',

          focusLight: '#2563EB',
          focusDark: '#38BDF8',
        },
        portfolio: {
          bg: '#F7FAFC',
          surface: '#FFFFFF',
          'surface-soft': '#EAF2FF',
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
          'primary-soft': '#EAF2FF',
          sky: '#38BDF8',
          text: '#0F172A',
          muted: '#526176',
          border: '#D8E3EF',
        }
      },
      fontFamily: {
        body: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Roboto Condensed"', '"Arial Narrow"', 'Segoe UI', 'sans-serif'],
        mono: ['"Cascadia Code"', '"SFMono-Regular"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'portfolio': '22px',
        'portrait': '32px 32px 110px 32px',
      },
      boxShadow: {
        'portfolio-light': '0 18px 50px rgba(15, 23, 42, 0.07)',
        'portfolio-dark': '0 18px 50px rgba(0, 0, 0, 0.35)',
      }
    },
  },
  plugins: [],
}
