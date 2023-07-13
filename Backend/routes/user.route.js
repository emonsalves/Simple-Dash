import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);
router.get("/all", userController.getAll);
router.get("/:username", userController.getOne);
router.put("/:username", userController.update);
router.delete("/:username", userController.deleted);

export default router;
