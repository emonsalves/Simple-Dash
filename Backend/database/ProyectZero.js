import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(
  process.env.SEQUELIZE_DATABASE,
  process.env.SEQUELIZE_USER,
  process.env.SEQUELIZE_PASSWORD,
  {
    host: process.env.SEQUELIZE_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
    timezone: "-04:00", // Ajusta el horario a Chile
  }
);
