const { Event } = require("../db/models")

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

    } catch (e) {
      console.log(e)
      res.sendStatus(410).json({ message: "something went wrong" })
    }
  }
}

module.exports = new EventController()