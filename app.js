require("dotenv").config();
require("module-alias/register");

const expressSanitizer = require("express-sanitizer");
const robots = require("express-robots-txt");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const app = express();

const DB = require("./database/");

app.use(robots("./robots.txt"));
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(expressSanitizer());
app.use(express.json());

app.use("/static", express.static("resources/static"));
app.use("/public", express.static("resources/public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/resources/views/index.html"));
});

app.use("/api", require("./routes/"));

app.get("/r/:code", async (req, res) => {
  try {
    const url = await DB.Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    }

    return res.status(404).json("No url found");
  } catch (err) {
    res.status(500).json("Server error");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`));
