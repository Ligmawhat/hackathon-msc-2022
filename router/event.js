const router = require("express").Router()
const EventControllers = require("../controllers/event-controller")

router.get("/getAllEvents", EventControllers.getAllEvents)
router.post("/new", EventControllers.createEvent)

module.exports = router