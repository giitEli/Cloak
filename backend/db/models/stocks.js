"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stock.init(
    {
      symbol: DataTypes.STRING,
      name: DataTypes.STRING,
      current_price: DataTypes.STRING,

      // more stock data

      // exchange: DataTypes.STRING,
      // sector: DataTypes.STRING,
      // industry: DataTypes.STRING,
      // employees: DataTypes.NUMBER,
      // ceo: DataTypes.STRING,
      // description: DataTypes.STRING,
      country: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Stock",
    }
  );
  return Stock;
};
