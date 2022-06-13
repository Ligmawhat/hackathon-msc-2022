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
    await queryInterface.bulkInsert("Companies", [
      {
        email: "elbrus@boot.camp",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "mospolytech@mail.com",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "volonter@moscow.rus",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "friends@rambler.ru",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "123@123.num",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
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
    await queryInterface.bulkDelete("Companies", null, {})
  },
}
