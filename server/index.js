const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 3090;
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

//DB setup
mongoose.connect("mongodb://localhost/recipe", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.on("connected", function() {
  console.log("connected to db");
});

//App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//Server Setup
app.listen(port);
console.log(`Server listening on port: ${port}`);
