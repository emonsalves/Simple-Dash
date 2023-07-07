import { Router } from "express";
import { jsonResponse } from "../lib/jsonResponse.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("signOut");
});

export default router;
