import Sequelize from "sequelize";
import { sequelize } from "../database/database.js";

// Define el modelo de usuario
const Users = sequelize.define("Users", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING(100),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// Define el modelo de rol
const Roles = sequelize.define("Roles", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(50),
    allowNull: false,
    unique: true,
  },
});

// Define la relación entre Usuario y Rol (Uno a Uno)
Users.belongsTo(Roles); // Agrega una clave foránea "RoleId" en la tabla de usuarios

// Sincroniza los modelos con la base de datos 
// debo separar esto.
sequelize
  .sync({ force: true})
  .then(() => {
    console.log("Tables created successfully");
  })
  .catch((error) => {
    console.error("Unable to create tables", error);
  });

export { Users, Roles };