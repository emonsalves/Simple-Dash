import { Router } from "express";
import { sendMail } from "../utils/mail.Util.js";

const router = Router();

router.post("/", (req, res) => {
  sendMail();
  res.send("Mail sent successfully");
});

export default router;
