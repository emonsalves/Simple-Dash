import dotenv from "dotenv";

const credentials = {
  host: dotenv.config().parsed.MYSQL_DB_HOST,
  user: dotenv.config().parsed.MYSQL_DB_USER,
  password: dotenv.config().parsed.MYSQL_DB_PASSWORD,
  database: dotenv.config().parsed.MYSQL_DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  ssl: {
    rejectUnauthorized: false,
  },
};

export { credentials };
