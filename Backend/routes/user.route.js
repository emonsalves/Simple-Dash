import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/register", userController.register);
router.get("/all", verifyToken, userController.getAll);
router.post("/recovery/:userName", userController.recoveryAccount);
router.get("/:userName", userController.getOne);
router.put("/update/:userName", userController.update);
router.put("/change-password/:userName", userController.changePassword);
router.put("/reset-password/:userName", userController.resetPassword);
router.delete("/delete/:userName", userController.deleted);

export default router;
