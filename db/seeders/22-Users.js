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
    await queryInterface.bulkInsert("Users", [
      {
        email: "danilpaclish@gmail.com",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "darsen@teacher.com",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alexy@god.com",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "alex@docker.com",
        password: "$2a$04$yI62lzH9PpxwPBR2rZZSDecy1NRQgnv9NU0XPI2gkHHJSEP5AbWeu",
        isActivated: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "vova@map.com",
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
    await queryInterface.bulkDelete("Users", null, {})
  },
}
