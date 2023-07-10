import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readdirSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

console.log("Wellcome we are loading routes... ");

// Remove the .js extension from the file name
const cleanFileName = (fileName) => {
  const cleanRoute = fileName.split(".")[0];
  return cleanRoute;
};

// Load the routes except index
readdirSync(join(__dirname)).filter((fileName) => {
  const prefixRoute = cleanFileName(fileName);
  if (prefixRoute !== "index") {
    console.log(`Loading Route...  ${prefixRoute}`);
    import(`./${prefixRoute}.route.js`).then((module) =>
      router.use(`/${prefixRoute}`, module.default)
    );
  }
});

console.log("Routes loaded successfully");

export default router;
