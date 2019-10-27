const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const connectDB = require("./db/");
const config = require("../config");

const app = express();

// Connect to db
connectDB();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use(
    "/",
    express.json({
        extended: false
    }),
    require("./routes/")
);
