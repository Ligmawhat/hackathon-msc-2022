"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class CompanyCredentials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company, { foreignKey: "company_id" })
    }
  }

  CompanyCredentials.init({
    company_id: DataTypes.INTEGER,
    type_of_organization: DataTypes.STRING,
    tin: DataTypes.INTEGER,
    prsn: DataTypes.INTEGER,
    legal_name: DataTypes.STRING,
    legal_address: DataTypes.STRING,
    logo: DataTypes.STRING,
    niche: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "CompanyCredentials",
  })
  return CompanyCredentials
}