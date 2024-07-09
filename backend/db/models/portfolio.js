"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Portfolio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Portfolio.belongsToMany(models.Stock, {
        through: "PortfolioStocks",
        foreignKey: "stockId",
      });
    }
  }
  Portfolio.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      balance: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Portfolio",
    }
  );
  return Portfolio;
};
