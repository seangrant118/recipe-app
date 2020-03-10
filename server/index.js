const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const port = process.env.PORT || 3090;
const app = express();
const router = require("./router");

//App setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);

//Server Setup
app.listen(port);
console.log(`Server listening on port: ${port}`);
