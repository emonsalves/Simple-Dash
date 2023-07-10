import { Role } from "./role.js";

async function createRoles() {
  try {
    await Role.sync(); // Sincronizar el modelo Role con la base de datos (asegurarse de que la tabla exista)

    // Crear tres roles en la tabla de roles
    await Role.create({ name: "Admin" });
    await Role.create({ name: "Moderator" });
    await Role.create({ name: "User" });

    console.log("Roles creados exitosamente.");
  } catch (error) {
    if (error.errors[0].type === "unique violation") {
      console.log("Error al crear los roles: Ya existen.");
    } else {
      console.error("Error al crear los roles:", error.errors[0].message);
    }

    // console.error("Error al crear los roles:", error.errors[0].message);
  } finally {
    process.exit(); // Salir del proceso una vez que se hayan creado los roles (opcional)
  }
}

export { createRoles };
