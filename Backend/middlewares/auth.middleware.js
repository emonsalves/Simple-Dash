import dotenv from "dotenv";
import { jsonWBT } from "../utils/jwt.Util.js";
import { jsonResponse } from "../lib/jsonResponse.js";

dotenv.config();

const verifyToken = (req, res, next) => {
  // Obtiene el token del encabezado de autorización
  const token = req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json("error: Token is required");
  }

  try {
    // Verifica y decodifica el token
    jsonWBT.verifyToken(token);
    const { userName } = jsonWBT.decodeToken(token);

    // Agrega el objeto decodificado al objeto de solicitud para su uso posterior
    req.usuario = userName;
    console.log("first middleware auth", req.usuario);
    // Continúa con la ejecución de la siguiente función de middleware o ruta
    next();
  } catch (error) {
    return res.status(401).json(jsonResponse(401, { message: error.message }));
  }
};

export { verifyToken };
