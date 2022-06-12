'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Events', [
      {
        company_id: 1,
        coordinates: "55.25, 37.5",
        employment: "employed",
        title: "title",
        category_id: 1,
        location: "Moscow",
        occupation: "occupation",
        time_period: "august",
        application_response_email: "igor@mail.ru",
        urgency: "week",
        reward: "pr9ni4ek",
        type: "type",
        img_url: "img_url", 
        task_description: "task description",
        term_description: "term description",
        required_skills: "skills",
        age_restrictions: "18",
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
