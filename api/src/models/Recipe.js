const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING(100)
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
    },
    steps: {
      type: DataTypes.STRING,
    },
  }, {
    timestamps: false
  });
};