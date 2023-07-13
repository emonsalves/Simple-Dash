import { User } from "./user.js";
import { Role } from "./role.js";

User.belongsTo(Role, {
  foreignKey: {
    name: "roleId",
    defaultValue: 1,
  },
});

export { User, Role };
