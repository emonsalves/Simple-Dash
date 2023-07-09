import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";
import { compare } from "../utils/bcypt.js";

const router = Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Missing required fields" }));
  }

  const user = await User.findOne({ where: { user_name: username } });

  if (!user) {
    return res
      .status(404)
      .json(jsonResponse(404, { message: "User not found" }));
  }
  
  const validPassword = await compare({ text: password, hash: user.password });

  if (!validPassword) {
    return res
      .status(400)
      .json(jsonResponse(400, { message: "Invalid password or user" }));
  }

  const accessToken = "access-token";
  const refreshToken = "refresh-token";

  res.status(200).json(jsonResponse(200, { accessToken, refreshToken, user }));
});

export default router;
