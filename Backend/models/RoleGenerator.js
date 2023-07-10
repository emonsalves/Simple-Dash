import { Role } from "./User.js"; // Importar el modelo Role

async function createRoles() {
  try {
    await Role.sync(); // Sincronizar el modelo Role con la base de datos (asegurarse de que la tabla exista)

    // Crear tres roles en la tabla de roles
    await Role.create({ name: "Admin" });
    await Role.create({ name: "Moderator" });
    await Role.create({ name: "User" });

    console.log("Roles creados exitosamente.");
  } catch (error) {
    console.error("Error al crear los roles:", error);
  } finally {
    process.exit(); // Salir del proceso una vez que se hayan creado los roles (opcional)
  }
}

export { createRoles }; // Exportar la función para poder usarla en otro archivo
