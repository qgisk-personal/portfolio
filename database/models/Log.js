const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Log", LogSchema);
