const express = require("express");
const router = express.Router();

// import handler
const userHandler = require("../handler/user");
const organizationHandler = require("../handler/organization");
const eventHandler = require("../handler/event");
const ticketHandler = require("../handler/ticket");

// endpoint for user
router.post("/register", userHandler.register);
// endpoint for organization

// endpoint for event

// enpoint for ticket

module.exports = router;
