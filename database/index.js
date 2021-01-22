const mongoose = require("mongoose");

mongoose.set("debug", process.env.MONGO_DEBUG);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

module.exports = {
  Contact: require("./models/Contact"),
  Url: require("./models/Url"),
  File: require("./models/File"),
  User: require("./models/User"),
  Log: require("./models/Log"),
};
