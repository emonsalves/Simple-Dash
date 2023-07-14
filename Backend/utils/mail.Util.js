import { createTransport, getTestMessageUrl } from "nodemailer";
import { mailConfig } from "../config/mail.config";

const sendMail = async () => {
  let transporter = createTransport(mailConfig);

  let mailOptions = {
    from: mailConfig.auth.user, // sender address
    to: "emonsalves@kayser.cl", // list of receivers
    subject: "Test Prueba", // Subject line
    text: "Esto es una prueba", // plain text body
    html: "<b>Esto es una prueba</b>", // html body
    attachments: [],
  };

  let info = await transporter.sendMail(mailOptions);
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", getTestMessageUrl(info));
};

export { sendMail };
