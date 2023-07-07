import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";

const router = Router();

router.post("/", (req, res) => {
  const { userName, password, passwordConfirmation } = req.body;

  if (password !== passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Passwords do not match" }));
  }

  if (!userName || !password || !passwordConfirmation) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  const createdUser = async ({userName, password}) => {
    await User.create({
      user_name: userName,
      password: password,
      name:"Test",
      last_name:"Test",
      email:"Test@gmail.com",
      phone:"Test",
      address:"Test",
    });
  };

  createdUser();

  //crear usuario en la data base
  res.status(201).json(jsonResponse(201, { message: "User created" }));
});

export default router;
