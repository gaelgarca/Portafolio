# ⚙️ Arquitectura y Estructura Backend (Express + Bun + MVC)

Documento técnico de especificación y diseño del backend para servir los datos del currículum y portafolio de **Álvaro Gael García Ramírez**.

---

## 1. 🚀 Stack Tecnológico

| Herramienta | Versión / Tipo | Justificación |
| :--- | :--- | :--- |
| **Bun** | v1.1+ | Runtime JavaScript/TypeScript ultrarrápido con soporte nativo de TS y ejecución inmediata. |
| **Express.js** | v4.19+ / v5 | Framework web minimalista, robusto y maduro para estructuración de APIs REST. |
| **TypeScript** | Nativo en Bun | Tipado estático de modelos, controladores y respuestas. |
| **CORS** | Middleware | Habilita peticiones cruzadas seguras desde el frontend (Vite en puerto `5173`). |
| **Dotenv** | Configuración | Manejo de variables de entorno (`PORT`, `CORS_ORIGIN`, etc.). |

---

## 2. 🏛️ Metodología Arquitectónica: Patrón MVC (Model-View-Controller)

En el contexto de una **API REST moderna**, el patrón MVC se adapta de la siguiente manera:

* **Model (Modelo)**: Modela las entidades de datos del CV, validaciones y lógica de acceso/persistencia a los datos (archivo JSON estructurado o base de datos).
* **View (Vista / Response DTO)**: Como no se renderiza HTML en el servidor, la "vista" es el formateador de respuestas JSON estandarizadas (envelope de respuesta: `success`, `data`, `meta`, `error`).
* **Controller (Controlador)**: Recibe las peticiones HTTP (`Request`), delega a los modelos/servicios la obtención de la información y devuelve el resultado a través de la vista (`Response`).
* **Routes (Enrutador)**: Mapea los verbos y rutas HTTP (`GET /api/cv`) hacia el método correspondiente del controlador.

---

## 3. 📂 Estructura de Directorios del Backend

```
backend/
├── src/
│   ├── config/                 # Configuraciones globales
│   │   ├── env.ts              # Validación de variables de entorno
│   │   └── cors.ts             # Configuración de políticas CORS
│   ├── data/                   # Fuente de datos inicial (Seed / Storage)
│   │   └── cvData.json         # Datos reales del CV extraídos del portafolio actual
│   ├── models/                 # Capa de Modelo
│   │   ├── cv.model.ts         # Modelo con métodos para consultar el CV
│   │   └── cv.types.ts         # Tipos e interfaces de las entidades
│   ├── views/                  # Capa de Vista (Formatters / DTOs)
│   │   └── apiResponse.ts      # Envelope estandarizado para respuestas JSON
│   ├── controllers/            # Capa de Controlador
│   │   └── cv.controller.ts    # Controladores para los endpoints de CV
│   ├── routes/                 # Definición de rutas Express
│   │   ├── cv.routes.ts        # Rutas asociadas al recurso /api/cv
│   │   └── index.ts            # Enrutador centralizado
│   ├── middlewares/            # Interceptores Express
│   │   ├── errorHandler.ts     # Manejador global de excepciones
│   │   └── logger.ts           # Logger de peticiones HTTP
│   ├── app.ts                  # Configuración de la aplicación Express
│   └── index.ts                # Entrypoint del servidor con Bun
├── .env.example
├── package.json
└── tsconfig.json
```

---

## 4. 🗄️ Modelos y Datos (`src/models/` y `src/data/`)

### `src/models/cv.types.ts`
```typescript
export interface Contact {
  email: string;
  phone: string;
  location: string;
  cvPdfUrl: string;
}

export interface Profile {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  fullName: string;
  headline: string;
  bio: string;
  currentStatus: string;
  location: string;
  avatarUrl: string;
}

export interface Signal {
  id: string;
  label: string;
  value: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
  description: string;
  capabilities: string;
}

export interface CV {
  profile: Profile;
  signals: Signal[];
  experience: Experience[];
  skills: SkillCategory[];
  education: Education;
  language: Language;
  contact: Contact;
}
```

### `src/models/cv.model.ts`
```typescript
import rawData from '../data/cvData.json';
import { CV, Profile, Experience, SkillCategory } from './cv.types';

export class CVModel {
  private static data: CV = rawData as CV;

  public static async getFullCV(): Promise<CV> {
    return this.data;
  }

  public static async getProfile(): Promise<Profile> {
    return this.data.profile;
  }

  public static async getExperience(): Promise<Experience[]> {
    return this.data.experience;
  }

  public static async getSkills(): Promise<SkillCategory[]> {
    return this.data.skills;
  }
}
```

---

## 5. 👁️ Vista / Formato de Respuesta (`src/views/apiResponse.ts`)

Estandariza todas las respuestas enviadas al cliente:

```typescript
import { Response } from 'express';

export interface ApiResponsePayload<T> {
  success: boolean;
  data: T | null;
  error?: string;
  timestamp: string;
}

export class ApiResponse {
  public static success<T>(res: Response, data: T, statusCode = 200): void {
    const payload: ApiResponsePayload<T> = {
      success: true,
      data,
      timestamp: new Date().toISOString(),
    };
    res.status(statusCode).json(payload);
  }

  public static error(res: Response, message: string, statusCode = 500): void {
    const payload: ApiResponsePayload<null> = {
      success: false,
      data: null,
      error: message,
      timestamp: new Date().toISOString(),
    };
    res.status(statusCode).json(payload);
  }
}
```

---

## 6. 🎮 Controlador (`src/controllers/cv.controller.ts`)

```typescript
import { Request, Response, NextFunction } from 'express';
import { CVModel } from '../models/cv.model';
import { ApiResponse } from '../views/apiResponse';

export class CVController {
  public static async getFullCV(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const cv = await CVModel.getFullCV();
      ApiResponse.success(res, cv);
    } catch (error) {
      next(error);
    }
  }

  public static async getProfile(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const profile = await CVModel.getProfile();
      ApiResponse.success(res, profile);
    } catch (error) {
      next(error);
    }
  }

  public static async getExperience(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const experience = await CVModel.getExperience();
      ApiResponse.success(res, experience);
    } catch (error) {
      next(error);
    }
  }

  public static async getSkills(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const skills = await CVModel.getSkills();
      ApiResponse.success(res, skills);
    } catch (error) {
      next(error);
    }
  }
}
```

---

## 7. 🚦 Enrutamiento (`src/routes/cv.routes.ts`)

```typescript
import { Router } from 'express';
import { CVController } from '../controllers/cv.controller';

const router = Router();

// Endpoints RESTful
router.get('/', CVController.getFullCV);
router.get('/profile', CVController.getProfile);
router.get('/experience', CVController.getExperience);
router.get('/skills', CVController.getSkills);

export default router;
```

---

## 8. 🔌 Servidor Bun + Express (`src/index.ts`)

### `src/app.ts`
```typescript
import express from 'express';
import cors from 'cors';
import cvRoutes from './routes/cv.routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['GET'],
}));

app.use(express.json());

// Registro de rutas
app.use('/api/cv', cvRoutes);

// Manejo de errores
app.use(errorHandler);

export default app;
```

### `src/index.ts`
```typescript
import app from './app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo con Bun en http://localhost:${PORT}`);
});
```

---

## 9. 📋 Scripts de Ejecución (`package.json`)

Para aprovechar la velocidad nativa de **Bun**:

```json
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "scripts": {
    "dev": "bun --watch src/index.ts",
    "start": "bun src/index.ts",
    "build": "bun build src/index.ts --target=node --outdir=./dist"
  },
  "dependencies": {
    "express": "^4.19.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/bun": "latest",
    "typescript": "^5.5.0"
  }
}
```

---

## 10. 🔄 Integración con el Frontend

1. El frontend realiza la llamada inicial mediante Axios a `GET http://localhost:3000/api/cv`.
2. El backend procesa la petición con `CVController.getFullCV`, lee los datos a través del `CVModel` y los devuelve encapsulados mediante `ApiResponse.success()`.
3. El frontend recibe `{ success: true, data: { profile, experience, ... } }` y renderiza los componentes atómicos.
