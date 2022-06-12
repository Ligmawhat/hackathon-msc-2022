"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserCredentials", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      middle_name: {
        type: Sequelize.STRING,
      },
      birthsday: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
      motivation: {
        type: Sequelize.TEXT,
      },
      about: {
        type: Sequelize.TEXT,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      skill_set_id: {
        type: Sequelize.INTEGER,
      },
      achiement_set_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("UserCredentials")
  },
}