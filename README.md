# 💼 Portafolio Profesional — Refactorización Fullstack

Proyecto de modernización y desacoplamiento del portafolio profesional de **Álvaro Gael García Ramírez**.

El proyecto migra desde una estructura estática monolítica (`dist/index.html`) hacia una arquitectura cliente-servidor moderna, escalable y desacoplada:

- **Frontend**: Vite + React + TypeScript + Tailwind CSS + Axios (con metodología **Atomic Design**).
- **Backend**: Express + Bun + TypeScript (con patrón arquitectónico **MVC**).

---

## 📚 Documentación de Arquitectura

Para consultar las especificaciones detalladas de cada capa, revisa los siguientes documentos:

1. **[Estructura y Especificaciones Frontend (FRONTEND.md)](./FRONTEND.md)**
   - Desglose por capas de Atomic Design (`atoms`, `molecules`, `organisms`, `templates`, `pages`).
   - Configuración de Tailwind CSS con los tokens y paleta del diseño actual.
   - Integración de cliente HTTP con Axios y hooks personalizados (`useCV`, `useTheme`).
   - Interfaces TypeScript completas.

2. **[Estructura y Especificaciones Backend (BACKEND.md)](./BACKEND.md)**
   - Adaptación del patrón MVC para APIs REST.
   - Definición de Modelos (`CVModel`), Vistas/DTOs (`ApiResponse`), Controladores (`CVController`) y Rutas.
   - Runtime de alto rendimiento con **Bun**.
   - Endpoints RESTful y configuración de CORS.

---

## 🗂️ Estructura Global del Proyecto

```
Portafolio/
├── frontend/                   # Aplicación Vite + React TS + Tailwind + Axios
│   ├── src/
│   │   ├── components/         # Atomic Design (atoms, molecules, organisms, templates)
│   │   ├── hooks/              # useCV, useTheme, useScrollSpy
│   │   ├── services/           # Axios apiClient y cvService
│   │   └── types/              # cv.types.ts
│   └── package.json
│
├── backend/                    # API Express + Bun + TypeScript (MVC)
│   ├── src/
│   │   ├── models/             # Lógica de datos y entidades
│   │   ├── views/              # Formato de respuesta JSON estándar
│   │   ├── controllers/        # Controladores de solicitudes HTTP
│   │   ├── routes/             # Endpoints RESTful (/api/cv)
│   │   └── data/               # Semilla de datos estructurada
│   └── package.json
│
├── dist/                       # (Código estático actual como referencia)
├── FRONTEND.md                 # Documento de especificación técnica del Frontend
├── BACKEND.md                  # Documento de especificación técnica del Backend
└── README.md                   # Índice global de la refactorización
```

---

## ⚡ Próximos Pasos para Ejecutar la Refactorización

1. Inicializar el workspace del frontend con `bun create vite frontend --template react-ts`.
2. Inicializar el backend con `bun init` en la carpeta `backend`.
3. Instalar Tailwind CSS y Axios en `frontend`.
4. Instalar Express y CORS en `backend`.
5. Trasladar el contenido de datos reales extraído del portafolio actual a `backend/src/data/cvData.json`.

