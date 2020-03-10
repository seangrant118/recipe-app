const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 3090;
const app = express();

//Server Setup
app.listen(port);
console.log(`Server listening on port: ${port}`);
