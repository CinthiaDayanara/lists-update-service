const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const List = sequelize.define("List", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  descripcion: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  },
  fecha_creacion: { 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  }
}, {
  timestamps: false
});

module.exports = List;
