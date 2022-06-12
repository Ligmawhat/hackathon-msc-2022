const router = require("express").Router()
const EventControllers = require("../controllers/event-controller")

router.post("/getAllEvents", EventControllers.getAllEvents)
router.get("/getAllCategories", EventControllers.getAllCategories)
router.post("/new", EventControllers.createEvent)

module.exports = router