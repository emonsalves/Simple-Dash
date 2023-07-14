import dotenv from "dotenv";
import { jsonWBT } from "../utils/jwt.Util";
import { jsonResponse } from "../lib/jsonResponse";

dotenv.config();

const verifyToken = (req, res, next) => {
  // Obtiene el token del encabezado de autorización
  const token = req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json(jsonResponse(401, { message: error.message }));
  }

  try {
    // Verifica y decodifica el token
    const decoded = jsonWBT.verifyToken(token);

    // Agrega el objeto decodificado al objeto de solicitud para su uso posterior
    req.usuario = decoded;

    // Continúa con la ejecución de la siguiente función de middleware o ruta
    next();
  } catch (error) {
    return res.status(401).json(jsonResponse(401, { message: error.message }));
  }
};

export { verifyToken };
