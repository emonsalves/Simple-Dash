import { Router } from "express";
import { LoginUser } from "../controllers/login.controller.js";
const router = Router();

router.post("/", LoginUser);

export default router;
