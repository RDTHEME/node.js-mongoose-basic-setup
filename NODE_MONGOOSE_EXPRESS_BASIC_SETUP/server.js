// add mongodb url in default.json
// npm install
// nodemon server

// SERVER
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/db");

//==============================================
//    MIDDLEWARE
//==============================================
//express
const app = express();
//mogran
app.use(morgan("dev"));
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//no middleware need for dotenv and mongoose

//connect database
connectDB();

//basic setup
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

//node app hosting
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`YOUR NODE SERVER RUNNING ON PORT ${PORT}`);
});
