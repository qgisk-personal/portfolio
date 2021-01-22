const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  slug: String,
  longCDN: String,
  shortC: String,
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", ImageSchema);
