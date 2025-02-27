'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wishlists.belongsTo(models.User, {foreignKey:'userId'})
    }
  };
  Wishlists.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }, 
    image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }, 
  }, {
    sequelize,
    modelName: 'Wishlists',
  });
  return Wishlists;
};