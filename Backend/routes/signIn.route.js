import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";

const router = Router();

router.post("/", async (req, res) => {
  const { userName, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json(
        jsonResponse(400, { message: "Passwords do not match", ok: false })
      );
  }

  if (!userName || !password || !passwordConfirmation) {
    return res
      .status(400)
      .json(
        jsonResponse(400, { message: "Missing required fields", ok: false })
      );
  }

  try {
    // Verificar si el nombre de usuario ya está registrado
    const existingUserName = await User.findOne({
      where: { user_name: userName },
    });

    if (existingUserName) {
      return res
        .status(400)
        .json(
          jsonResponse(400, { message: "Username already exists", ok: false })
        );
    }

    // Crear un nuevo usuario
    await User.create({
      user_name: userName,
      password: password,
      name: "Test",
      last_name: "Test",
      // email: "test",
      phone: "Test",
      address: "Test",
    });

    res
      .status(201)
      .json(jsonResponse(201, { message: "User created", ok: true }));
  } catch (error) {
    res
      .status(500)
      .json(jsonResponse(500, { message: error.message, ok: false }));
  }
});

export default router;
