"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Categories", [
      {
        value: "Здравоохранение",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Спорт",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Сбор пожертвований",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Гуманитарная помощь",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Помощь животным",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Помощь бездомным",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Развлечения",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Медицинское волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Патриотическое волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Корпоративное волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Культурное волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Экологическое волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Поисково-спасательное волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Онлайн-волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Классическое волонтерство",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     *
     */
    await queryInterface.bulkDelete("Categories", null, {})
  },
}
