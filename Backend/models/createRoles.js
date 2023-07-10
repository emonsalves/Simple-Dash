import { Role } from "./role.js";

async function createRoles() {
  try {
    // Crear la tabla de roles utilizando migraciones de Sequelize (ejemplo)
    // await queryInterface.createTable('Roles', { ... });

    // Crear tres roles en la tabla de roles si no existen previamente
    await Role.findOrCreate({ where: { name: "User" } });
    await Role.findOrCreate({ where: { name: "Admin" } });

    console.log("Roles created successfully");
  } catch (error) {
    console.error("Error creating roles: ", error);
  } finally {
    process.exit(); // Salir del proceso una vez que se hayan creado los roles (opcional)
  }
}

export { createRoles };
