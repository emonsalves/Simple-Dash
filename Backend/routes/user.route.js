import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);
router.get("/all", verifyToken, userController.getAll);
router.get("/:username", userController.getOne);
router.put("/update/:username", userController.update);
router.delete("/delete/:username", userController.deleted);
router.post("/recovery", userController.recoveryAccount);

export default router;
