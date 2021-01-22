const express = require("express");
const router = express.Router();

const { Contact, Limiter } = require("./helpers/Limiters");
const Controller = require("./controllers/ContactController");
const fileController = require("./controllers/FileController");
const { upload } = require("./helpers/fileFilter");

router.post("/contact", Contact, Controller.store);
router.route("/file", Limiter).post(upload.single("file"), fileController.store);

module.exports = router;
