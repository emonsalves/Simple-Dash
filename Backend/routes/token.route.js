import { Router } from "express";

const router = Router();

router.post("/refresh", (req, res) => {
  res.send("Refresh Token!");
});

export default router;
