"use strict"
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CompanyCredentials", {
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
      type_of_organization: {
        type: Sequelize.STRING,
      },
      tin: {
        type: Sequelize.INTEGER,
      },
      prsn: {
        type: Sequelize.INTEGER,
      },
      legal_name: {
        type: Sequelize.STRING,
      },
      legal_address: {
        type: Sequelize.STRING,
      },
      logo: {
        type: Sequelize.STRING,
      },
      niche: {
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
    await queryInterface.dropTable("CompanyCredentials")
  },
}