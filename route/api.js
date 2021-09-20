const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();

// import handler
const userHandler = require("../handler/user");
const eventHandler = require("../handler/event");

// test on heroku

// endpoint for user
router.post("/register-customer", userHandler.registerCustomer);
router.post("/register-organizer", userHandler.registerOrganizer);
router.post("/login", userHandler.login);
router.put("/organizer", upload.single("logo"), userHandler.updateOrganizer);

// endpoint for event
router.post("/event", upload.single("event_image"), eventHandler.create);
router.get("/event", eventHandler.getAll);
router.get("/event/published", eventHandler.getPublished);
router.get("/event/drafted", eventHandler.getDrafted);

// for upload image
router.post("/upload-image", upload.single("avatar"), eventHandler.uploadImage);

module.exports = router;
