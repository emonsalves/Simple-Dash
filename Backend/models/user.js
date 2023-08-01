import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/ProyectZero.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      validate: {
        isUUID: 4,
      },
    },
    first_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: "The first name only can contain letters",
        },
        len: {
          args: [3, 150],
          msg: "The first name must have between 3 and 150 characters",
        },
      },
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isAlpha: {
          args: true,
          msg: "The last name only can contain letters",
        },
        len: {
          args: [3, 150],
          msg: "The last name must have between 3 and 150 characters",
        },
      },
    },
    user_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "The user name only can contain letters and numbers",
        },
        len: {
          args: [3, 150],
          msg: "The user name must have between 3 and 150 characters",
        },
      },
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      // validate: {
      //   isEmail: {
      //     args: true,
      //     msg: "The email is not valid",
      //   },
      // },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      // validate: {
      //   len: {
      //     args: [8, 255],
      //     msg: "The password must have between 8 and 255 characters",
      //   },
      // },
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        len: {
          args: [3, 255],
          msg: "The address must have between 3 and 255 characters",
        },
      },
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        len: {
          args: [3, 255],
          msg: "The phone must have between 3 and 255 characters",
        },
        isNumeric: {
          args: true,
          msg: "The phone only can contain numbers",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export { User };
