var DataTypes = require("sequelize").DataTypes;
var _roles = require("./roles");
var _users = require("./users");

function initModels(sequelize) {
  var roles = _roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  users.belongsTo(roles, { as: "role", foreignKey: "roleId"});
  roles.hasMany(users, { as: "users", foreignKey: "roleId"});

  return {
    roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
