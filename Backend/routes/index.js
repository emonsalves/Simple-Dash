import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__filename, __dirname)

const router = express.Router();

console.log("Bienvenido, estamos cargando las rutas de la API");

// Remove the .js extension from the file name
const cleanFileName = (fileName) => {
  const clean = fileName.split('.').shift();
  return clean;
};

// Load the routes except index
readdirSync(join(__dirname)).filter((fileName) => {
  const prefixRoute = cleanFileName(fileName);
  if (prefixRoute !== 'index') {
    console.log(`Cargando Ruta... ${prefixRoute}`);
    import(`./${prefixRoute}.js`).then((module) => {
      router.use(`/${prefixRoute}`, module.default);
    });
  }
});

console.log("Rutas cargadas correctamente");

export default router;
