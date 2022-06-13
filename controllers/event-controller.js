const { Category, Event, Sequelize } = require("../db/models")
// const eventService = require("../service/event-service.js")

class EventController {
  async createEvent(req, res) {
    const {
      company_id,
    } = req.body
    try {
      await Event.create({ company_id })
      res.json({ message: "ok" })
    } catch (e) {
      console.log(e)
      res.json({ message: "something went wrong" })
    }
  }

  async getAllEvents(req, res) {
    try {
      const { filters } = req.body
      let allEvents;
      const newFilters = {}

      if(filters.every((filter) => filter.value === null || (Array.isArray(filter.value)
       && filter.value.every((oneFilter) => !oneFilter.active)))) 
       {
        const returnEvents  = await Event.findAll()
        const allCategories = await Category.findAll({})
        const allCategoriesIds = allCategories.map((el) => el.id)
        allEvents = returnEvents.map(({dataValues}) => {
          return {...dataValues, category: allCategories.find((elem) => elem.id === dataValues.category_id)?.value}
        })
      } else {
        for(let oneFilter of filters) {
          if(Array.isArray(oneFilter.value)) {
            console.log(oneFilter)
            const activeCategories = oneFilter.value.filter((el) => el.active).map((el) => el.title)

            newFilters["where"] = { value: {[Sequelize.Op.or]: [...activeCategories] } }
              const allCategories = await Category.findAll(newFilters)
              const allCategoriesIds = allCategories.map((el) => el.id)
              const returnEvents = await Event.findAll({where: { category_id: {[Sequelize.Op.or]: allCategoriesIds } }})
              allEvents = returnEvents.map(({dataValues}) => {
                return {...dataValues, category: allCategories.find((elem) => elem.id === dataValues.category_id)?.value}
              })
            }
        } 
      } 
      return res.json({allEvents})
    } catch (e) {
      console.log(e)
      res.sendStatus(410).json({ message: "something went wrong" })
    }
  }

  async getAllCategories(req, res) {
    try {
      const allCategories = await Category.findAll()
      console.log(allCategories)
      return res.json({allCategories})
    } catch (e) {
      console.log(e)
      res.sendStatus(410).json({ message: "something went wrong" })
    }
  }

}

module.exports = new EventController()