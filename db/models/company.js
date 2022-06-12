"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.CompanyCredentials, { foreignKey: "company_id" })
      this.hasMany(models.Event, { foreignKey: "company_id" })
    }
  }

  Company.init({
    token_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.TEXT,
    is_approved: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "Company",
  })
  return Company
}