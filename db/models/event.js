"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company, { foreignKey: "company_id" })
      this.hasOne(models.Category, { foreignKey: "category_id" })
      // this.belongsToMany(models.User, { through: "Applications", foreignKey: "event_id" })
      this.belongsTo(models.Application, { foreignKey: "event_id" })
    }
  }

  Event.init({
    company_id: DataTypes.INTEGER,
    coordinates: DataTypes.STRING,
    employment: DataTypes.STRING,
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    occupation: DataTypes.STRING,
    time_period: DataTypes.STRING,
    application_response_email: DataTypes.STRING,
    urgency: DataTypes.STRING,
    reward: DataTypes.STRING,
    type: DataTypes.STRING,
    img_url: DataTypes.STRING,
    task_description: DataTypes.STRING,
    term_description: DataTypes.STRING,
    required_skills: DataTypes.STRING,
    age_restrictions: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Event",
  })
  return Event
}