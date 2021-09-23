const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

// import handler
const userHandler = require("../handler/user");
const eventHandler = require("../handler/event");
const orderHandler = require("../handler/order");

// endpoint for user
router.post("/register-customer", userHandler.registerCustomer);
router.post("/register-organizer", userHandler.registerOrganizer);
router.post("/login", userHandler.login);
router.put("/organizer", upload.single("logo"), userHandler.updateOrganizer);

// endpoint for event
router.post("/event", upload.single("event_image"), eventHandler.create);
router.put("/event/publish", eventHandler.publishEvent);
router.get("/event", eventHandler.getAll);
router.get("/event/:event_id", eventHandler.getById);
router.get("/event/published", eventHandler.getPublished);
router.get("/event/drafted", eventHandler.getDrafted);

// endpoint for order
router.get("/order", orderHandler.getAllOrder);
router.post("/order", orderHandler.createOrder);

module.exports = router;
