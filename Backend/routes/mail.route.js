import { Router } from "express";
import { sendMail } from "../utils/mail.Util.js";

const router = Router();

router.post("/", (req, res) => {
  const { to, subject, text, textHtml } = req.body;
  sendMail({ to, subject, text, textHtml});
  res.send("Mail sent successfully");
});

export default router;
