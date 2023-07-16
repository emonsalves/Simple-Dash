import { createTransport, getTestMessageUrl } from "nodemailer";
import { mailConfig } from "../config/gmail.config.js";

const sendMail = async ({ to, subject, text, textHtml }) => {
  let transporter = createTransport(mailConfig);

  let mailOptions = {
    from: mailConfig.auth.user, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: textHtml, // html body
    attachments: [],
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
};

export { sendMail };
