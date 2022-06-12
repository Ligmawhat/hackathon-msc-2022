"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("AchievementSets", {
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
      achievement_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Achievements",
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
    await queryInterface.dropTable("AchievementSets")
  },
}