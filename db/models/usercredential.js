"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class UserCredential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Skill, { through: "SkillSetUsers", foreignKey: "user_credentials_id" })
      this.belongsToMany(models.Achievement, { through: "AchievementSet", foreignKey: "user_credentials_id" })
      this.belongsTo(models.User, { foreignKey: "user_id" })

    }
  }

  UserCredential.init({
    user_id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    birthsday: DataTypes.STRING,
    location: DataTypes.STRING,
    sex: DataTypes.STRING,
    motivation: DataTypes.TEXT,
    about: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    skill_set_id: DataTypes.INTEGER,
    achiement_set_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "UserCredential",
  })
  return UserCredential
}