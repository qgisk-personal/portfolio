const multer = require("multer");

exports.fileFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF|css|CSS|webp|WEBP)$/)) {
    req.fileValidationError = "Only Specific files are allowed!";
    return cb(new Error("Only Specific files are allowed!"), false);
  }
  cb(null, true);
};

exports.limit = process.env.FILE_LIMIT;

exports.upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: this.imageFilter,
  limit: this.limit,
});
