const express = require("express");
const router = express.Router();

const { Contact, Limiter } = require("./helpers/Limiters");
const Controller = require("@controllers/ContactController");
const fileController = require("@controllers/FileController");
const { upload } = require("@helpers/fileFilter");
const { ensureAuthenticated, hasPerm } = require("@middleware/auth");

router.post("/contact", Contact, Controller.store);

router
  .route("/file", Limiter)
  .post(ensureAuthenticated, hasPerm("admin"), upload.single("file"), fileController.store);

module.exports = router;
