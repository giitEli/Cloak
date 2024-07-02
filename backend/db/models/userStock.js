"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserStock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserStock.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  UserStock.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stockId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserStock",
    }
  );
  return UserStock;
};
