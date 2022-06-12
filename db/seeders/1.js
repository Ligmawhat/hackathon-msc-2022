'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
       value: "поиск",
       createdAt: new Date(),
       updatedAt: new Date(),
    },
    {
      value: "путешествие",
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    value: "сбор пожертвований",
    createdAt: new Date(),
    updatedAt: new Date(),
 },
 {
  value: "ближайшие",
  createdAt: new Date(),
  updatedAt: new Date(),
},
   
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
