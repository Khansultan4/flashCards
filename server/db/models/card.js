'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
   
    static associate(models) {
      this.belongsTo(models.Theme, { foreignKey: 'themeId' });  
    }
  }
  Card.init({
    question: DataTypes.TEXT,
    answer: DataTypes.STRING,
    themeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};