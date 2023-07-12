import { User } from "./user.js";
import { Role } from "./role.js";

User.belongsTo(Role, {
  foreignKey: {
    name: "roleId",
    defaultValue: 1, // ID del rol predeterminado
  },
});

export { User, Role };
