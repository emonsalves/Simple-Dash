import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(jsonResponse(200, { users, ok: true }));
});

router.get("/:username", async (req, res) => {
  const { username } = req.params;
  console.log("test", username);
  const user = await User.findOne({ where: { user_name: username } });
  user
    ? res.json(jsonResponse(200, { user, ok: true }))
    : res.json(jsonResponse(404, { message: "User not found", ok: false }));
});

export default router;
