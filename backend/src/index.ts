import app from './app';
import { env } from './config/env';

const server = app.listen(env.PORT, () => {
  console.log(`🚀 Servidor backend corriendo con Bun en http://localhost:${env.PORT}`);
  console.log(`📡 Endpoints principales:`);
  console.log(`   - Health check:     http://localhost:${env.PORT}/api/health`);
  console.log(`   - CV Completo:      http://localhost:${env.PORT}/api/cv`);
  console.log(`   - Perfil:           http://localhost:${env.PORT}/api/cv/profile`);
  console.log(`   - Señales:          http://localhost:${env.PORT}/api/cv/signals`);
  console.log(`   - Experiencia:      http://localhost:${env.PORT}/api/cv/experience`);
  console.log(`   - Habilidades:      http://localhost:${env.PORT}/api/cv/skills`);
  console.log(`   - Educación:        http://localhost:${env.PORT}/api/cv/education`);
  console.log(`   - Idioma:           http://localhost:${env.PORT}/api/cv/language`);
  console.log(`   - Contacto:         http://localhost:${env.PORT}/api/cv/contact`);
  console.log(`🔒 Origen CORS permitido: ${env.CORS_ORIGIN}`);
});

// Manejo de señales de cierre seguro
const gracefulShutdown = (signal: string) => {
  console.log(`\n🛑 Recibida señal ${signal}. Cerrando servidor de manera segura...`);
  server.close(() => {
    console.log('✅ Servidor cerrado correctamente.');
    process.exit(0);
  });
};

process.on('SIGINT', () => gracefulShutdown('SIGINT'));
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));

export default server;
