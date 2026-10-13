import type { CVData } from '../types/cv.types';

export const fallbackCVData: CVData = {
  profile: {
    name: 'Álvaro Gael',
    paternalSurname: 'García',
    maternalSurname: 'Ramírez',
    headline: 'Álvaro Gael García Ramírez',
    bio: 'Soy estudiante de Ingeniería en Sistemas Computacionales en la Universidad Autónoma de Aguascalientes, con experiencia en soporte y actividades administrativas. Actualmente participo en el control de información, elaboración de reportes, atención al cliente y seguimiento postventa. Busco continuar desarrollándome en un entorno donde pueda fortalecer mis conocimientos tecnológicos y aportar organización, comunicación y disposición para aprender.',
    currentStatus: 'Formación tecnológica con experiencia práctica',
    lead: 'Estudiante de Ingeniería en Sistemas Computacionales con experiencia en soporte, gestión administrativa, control de información y atención al cliente.',
  },
  signals: [
    {
      id: 'exp',
      label: 'Experiencia',
      value: 'SISCEN, desde 2023',
    },
    {
      id: 'edu',
      label: 'Formación',
      value: 'Ing. en Sistemas Computacionales',
    },
    {
      id: 'lang',
      label: 'Idioma',
      value: 'Inglés intermedio-avanzado',
    },
  ],
  experience: [
    {
      id: 'siscen',
      company: 'SISCEN',
      role: 'Técnico administrativo / soporte',
      period: '2023 — Actualidad',
      isCurrent: true,
      highlights: [
        'Gestión de reportes y control de información interna.',
        'Atención al cliente y seguimiento postventa.',
        'Apoyo en bases de datos y documentación digital.',
        'Coordinación de citas y tareas administrativas.',
      ],
    },
  ],
  skills: [
    {
      id: 'tools',
      title: 'Herramientas',
      iconName: 'FileSpreadsheet',
      tags: ['Microsoft Excel', 'Microsoft Word', 'PowerPoint'],
    },
    {
      id: 'info',
      title: 'Información',
      iconName: 'Database',
      tags: ['Hojas de cálculo', 'Reportes', 'Documentación digital', 'Bases de datos, nivel básico'],
    },
    {
      id: 'ops',
      title: 'Operación',
      iconName: 'CheckSquare',
      tags: ['Organización de tareas', 'Coordinación de citas', 'Seguimiento', 'Toma de decisiones'],
    },
    {
      id: 'collab',
      title: 'Colaboración',
      iconName: 'Users',
      tags: ['Atención al cliente', 'Comunicación efectiva', 'Trabajo en equipo', 'Adaptabilidad'],
    },
  ],
  education: {
    degree: 'Ingeniería en Sistemas Computacionales',
    institution: 'Universidad Autónoma de Aguascalientes',
    status: 'Cursando 3.er semestre',
  },
  language: {
    name: 'Inglés',
    level: 'Intermedio-avanzado',
    description: 'Comunicación para contextos académicos y profesionales.',
    capabilities: 'Lectura, escritura y conversación',
  },
  contact: {
    email: 'a.gael.g.rmz@gmail.com',
    phone: '4491902456',
    location: 'Aguascalientes, Ags.',
    cvPdfUrl: '/assets/Curriculum-Gael-Garcia.pdf',
  },
};
