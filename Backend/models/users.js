const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "user_name"
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_name" },
        ]
      },
      {
        name: "roleId",
        using: "BTREE",
        fields: [
          { name: "roleId" },
        ]
      },
    ]
  });
};
