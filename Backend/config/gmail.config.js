import dotenv from "dotenv";

dotenv.config();

const mailConfig = {
  host: process.env.GMAIL_HOST, // hostname
  port: process.env.GMAIL_PORT, // port for secure SMTP
  tls: {
    rejectUnauthorized: false,
  },
  auth: {
    user: process.env.GMAIL_USER, // Your email id
    pass: process.env.GMAIL_PASSWORD, // Your password
  },
};

export { mailConfig };
