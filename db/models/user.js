"use strict"
const {
  Model,
} = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Token, { foreignKey: "userId" })
      this.hasOne(models.UserCredential, { foreignKey: "user_id" })
      // this.belongsToMany(models.Events, { through: "Applications", foreignKey: "user_id" })
      this.belongsTo(models.Application, { foreignKey: "user_id" })
      this.hasMany(models.Message, { foreignKey: "user_id" })
    }
  }

  User.init({
    credentials_id: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isActivated: DataTypes.BOOLEAN,
    activationLink: DataTypes.STRING,
  }, {
    sequelize,
    modelName: "User",
  })
  return User
}