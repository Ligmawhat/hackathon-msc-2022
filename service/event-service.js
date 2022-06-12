const { Event, Sequelize } = require("../../db/models")

class EventService {
  async getAllEvents() {
    const events = await Event.findAll()
    return events
  }
}

module.exports = new EventService()
