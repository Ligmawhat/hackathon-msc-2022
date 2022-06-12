"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User, { foreignKey: "user_id" })
      this.hasMany(models.Event, { foreignKey: "event_id" })
    }
  }

  Application.init({
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Application",
  })
  return Application
}