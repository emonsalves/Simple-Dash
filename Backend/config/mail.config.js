import dotenv from "dotenv";

dotenv.config();

const mailConfig = {
  host:   process.env.MAIL_HOST, // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: process.env.MAIL_PORT, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: process.env.MAIL_USER, // Your email id
    pass: process.env.MAIL_PASSWORD, // Your password
  },
};

export { mailConfig };
