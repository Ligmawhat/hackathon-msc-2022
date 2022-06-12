"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.UserCredential, { through: "AchievementSet", foreignKey: "achievement_id" })
    }
  }

  Achievement.init({
    value: DataTypes.STRING,
    img: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: "Achievement",
  })
  return Achievement
}