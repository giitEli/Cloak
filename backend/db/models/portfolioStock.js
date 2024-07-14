"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PortfolioStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PortfolioStock.belongsTo(models.Portfolio, {
        foreignKey: "portfolioId",
      });
    }
  }
  PortfolioStock.init(
    {
      portfolioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stockId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PortfolioStock",
    }
  );
  return PortfolioStock;
};
