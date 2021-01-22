const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema({
  slug: String,
  longCDN: String,
  shortCDN: String,
  type: String,
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", FileSchema);
