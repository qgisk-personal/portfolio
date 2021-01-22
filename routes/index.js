const express = require("express");
const router = express.Router();

const Controller = require("@controllers/ContactController");
const FileController = require("@controllers/FileController");
const AuthController = require("@controllers/AuthController");

const { upload } = require("@helpers/fileFilter");
const { Contact, Limiter, Auth } = require("@helpers/Limiters");
const { ensureAuthenticated, hasPerm } = require("@middleware/auth");

router.post("/contact", Contact, Controller.store);

router.post("/auth/login", Auth, AuthController.login);
router.post("/auth/get-user-by-token", Limiter, AuthController.getUserByToken);

router
  .route("/file", Limiter)
  .get(ensureAuthenticated, hasPerm("ACCESS"), FileController.index)
  .post(ensureAuthenticated, hasPerm("WRITE"), upload.single("file"), FileController.store);

router.route("/file/:slug").get(ensureAuthenticated, hasPerm("ACCESS"), FileController.show);

module.exports = router;
