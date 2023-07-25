import { Router } from "express";
import { tokenController } from "../controllers/token.controller.js";

const router = Router();

router.post("/refresh", tokenController.refreshToken);

export default router;
