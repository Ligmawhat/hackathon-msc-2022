"use strict"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Events", [
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
      {
        company_id: 1,
        employment: "Гоша",
        title: "Помощьник в для начинающих программистов",
        category_id: 7,
        location: "Орджаникидзе 11с10",
        occupation: "Половина рабочего дня",
        time_period: "пн-пт, с 14:00 до 19:00",
        application_response_email: "elbrus@boot.camp",
        urgency: "",
        reward: "Вкусная еда, много новых и приятных знакомств",
        age_restrictions: "18+",

        task_description:
          "Помощь в обучение юных умов программированию на JavaScript",
        required_skills:
          "Ответственность, самостоятельность, быстрая обучаемость, пытливость ума, умение доходчиво объяснять материал",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: 1,
        employment: "Гоша",
        title:
          "Требуется волонтер для проведения лекции о пользе программирования",
        category_id: 4,
        location: "Орджаникидзе 11с10",
        occupation: "Небольшая",
        time_period: "Четверг с 19:00 до 20:00",
        application_response_email: "elbrus@boot.camp",
        urgency: "Срочно",
        reward: "Вкусная еда, много новых и приятных знакомств",
        age_restrictions: "25+",

        task_description: "Рассказавть и завлечь людей в сферу АйТи",
        required_skills:
          "Самостоятельность, коммуникабельность, умение завлечь публику, голосистость",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: 2,
        employment: "Вуз",
        title: "Требуются волонтеры для проведения дня открытых дверей",
        category_id: 8,
        location: "Московский политех",
        occupation: "Первая половина дня",
        time_period: "3 Ноября с 9:00 до 13:00",
        application_response_email: "mospolytech@mail.com",
        reward: "Вкусная еда, аттрибутика с символикой университета",
        task_description:
          "Помогать разносить стулья, показывать дорогу до кабинетов, помощь в гардеробе",
        required_skills: "Ответственность, пунктуальность, коммуникабельность",
        age_restrictions: "16+",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: 4,
        title: "Проведение корпаратива",
        category_id: 3,
        location: "Кафе Friends",
        occupation: "Вечер пятница",
        time_period: "31 декабря с 18:00 до 00:00",
        reward: "Вкусная еда, позитивное настроение и аттрибутика кафе",
        task_description:
          "Требуется помощь в проведении корпоратива для персонала",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company_id: 3,
        title: "Озеленение парка",
        category_id: 5,
        location: "Парк Горького",
        occupation: "Весь день",
        time_period: "Сб с 10 до 20",
        task_description:
          "Будем приводить в порядок парк, очищая его от мусора, сажая и поливая деревья",
        required_skills:
          "Ответственность, коммуникабельность, энергичность, общительностть",
        age_restrictions: "12+",
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
     */
    await queryInterface.bulkDelete("Events", null, {})
  },
}
