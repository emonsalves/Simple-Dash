import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
import { User } from "../models/Proyect.js";

const router = Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.json(jsonResponse(200, { users, ok: true }));
});

export default router;
