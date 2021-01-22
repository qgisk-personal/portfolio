const express = require("express");
const router = express.Router();

const { Contact, Limiter } = require("./helpers/Limiters");
const Controller = require("./controllers/ContactController");
const imageController = require("./controllers/ImageController");
const { upload } = require("./helpers/ImageFilter");

router.post("/contact", Contact, Controller.store);
router.route("/image", Limiter).post(upload.single("image"), imageController.store);

module.exports = router;
