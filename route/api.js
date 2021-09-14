const express = require("express");
const router = express.Router();

// import handler
const userHandler = require("../handler/user");
const eventHandler = require("../handler/event");

// endpoint for user
router.post("/register-customer", userHandler.registerCustomer);
router.post("/register-organizer", userHandler.registerOrganizer);
router.post("/login", userHandler.login);

// endpoint for event
router.post("/event", eventHandler.create);
router.get("/event", eventHandler.getAll);
router.get("/event/published", eventHandler.getPublished);
router.get("/event/drafted", eventHandler.getDrafted);

module.exports = router;
