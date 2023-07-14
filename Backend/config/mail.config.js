const mailConfig = {
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  tls: {
    ciphers: "SSLv3",
  },
  auth: {
    user: "no-reply@kayser.cl",
    pass: "Yav41378",
  },
};

export { mailConfig };
