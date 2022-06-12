"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("SkillSetUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_credentials_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "UserCredentials",
          key: "id",
        },
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Skills",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("SkillSetUsers")
  },
}