import { Router } from "express";
import { sendMail } from "../utils/mail.Util.js";

const router = Router();

router.post("/send", (req, res) => {
  sendMail();
  res.send("Mail sent!");
});

export default router;
