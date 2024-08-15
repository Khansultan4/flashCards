'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
  
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'themeId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Score.init({
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    themeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};