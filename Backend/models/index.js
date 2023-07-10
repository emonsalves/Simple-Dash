import { User } from "./user.js";
import { Role } from "./role.js";

// Relación uno a muchos (un rol puede tener muchos usuarios)

User.belongsTo(Role, {
  // foreignKey: {
  //   name: "roleId",
  //   defaultValue: 1, // ID del rol predeterminado
  // },
});

export { User, Role };
