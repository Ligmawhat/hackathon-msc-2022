"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.UserCredential, { through: "SkillSetUsers", foreignKey: "skill_id" })
    }
  }

  Skill.init({
    value: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Skill",
  })
  return Skill
}