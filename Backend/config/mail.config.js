import dotenv from "dotenv";

dotenv.config();

const mailConfig = {
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.MAIL_USER, // Your email id
    pass: process.env.MAIL_PASSWORD, // Your password
  },
};

export { mailConfig };
