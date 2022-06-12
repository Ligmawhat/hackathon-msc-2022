"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Events", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Companies",
          key: "id",
        },
      },
      coordinates: {
        type: Sequelize.STRING,
      },
      employment: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
      location: {
        type: Sequelize.STRING,
      },
      occupation: {
        type: Sequelize.STRING,
      },
      time_period: {
        type: Sequelize.STRING,
      },
      application_response_email: {
        type: Sequelize.STRING,
      },
      urgency: {
        type: Sequelize.STRING,
      },
      reward: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      img_url: {
        type: Sequelize.STRING,
      },
      task_description: {
        type: Sequelize.STRING,
      },
      term_description: {
        type: Sequelize.STRING,
      },
      required_skills: {
        type: Sequelize.STRING,
      },
      age_restrictions: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Events")
  },
}