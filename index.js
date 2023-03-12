// importing required libraries
const express = require('express');
const app = express();

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8003;

const db = require('./config/mongoose');

// middle for parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route for home
app.use("/", require("./routes/index"));

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error while running server", err);
    return;
  }
  console.log(`server running on port ${PORT}`);
});
