const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyPareser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");

dotenv.config();
//db
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("DB conected");
});

mongoose.connection.on("error", (err) => {
  console.log(`DB connect error: ${err.message}`);
});
const postRoutes = require("./routes/post");

//middleware
app.use(morgan("dev"));
app.use(bodyPareser.json());
app.use(expressValidator());
app.use("/", postRoutes);

const port = process.env.PORT || 3838;

app.listen(port, () => {
  console.log("nodea");
});
