"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class SkillSetUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  SkillSetUser.init({
    user_credentials_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "SkillSetUser",
  })
  return SkillSetUser
}