const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const List = sequelize.define("List", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  board_id: { type: DataTypes.INTEGER, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.INTEGER, allowNull: false },
}, {
  timestamps: false
});

module.exports = List;
