"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Skills", [
      {
        value: "Умение помогать в режиме многозадачности",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Опыт работы с детьми",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Организованность",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Самостоятельность",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Английский язык — обязательно",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: "Устойчивость к стрессам",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Skills", null, {})
  },
}
