const { Category, Event } = require("../db/models")

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
      let allEvents
      console.log("FILTERS >>>>>>>>>>", filters)
      const newFilters = {}
      // for(let filter of filters) {
      //   if(filter.value !== null) {
      //     if(Array.isArray(filter.value)) {

      //     }
      //   }
      // }
      if (filters.every((filter) => filter.value === null)) {
        allEvents = await Event.findAll()
      }

      return res.json({ allEvents })
    } catch (e) {
      console.log(e)
      res.json({ message: "something went wrong" })
    }
  }

  async getAllCategories(req, res) {
    try {
      const allCategories = await Category.findAll()
      console.log(allCategories)
      return res.json({ allCategories })
    } catch (e) {
      console.log(e)
      res.sendStatus(410).json({ message: "something went wrong" })
    }
  }

}

module.exports = new EventController()