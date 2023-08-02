import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/ProyectZero.js";

class Role extends Model {}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      validate: {
        isInt: { args: true, msg: "The id must be an integer" },
      },
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isAlpha: { args: true, msg: "The name only can contain letters" },
        len: {
          args: [3, 50],
          msg: "The name must have between 3 and 50 characters",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "Role",
    tableName: "roles",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export { Role };
