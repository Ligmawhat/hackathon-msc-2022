const router = require("express").Router()
const EventCotrollers = require("../controllers/event-controller")

router.post("/new", EventCotrollers.createEvent)

module.exports = router