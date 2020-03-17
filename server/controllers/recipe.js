const Recipe = require("../models/recipe");

exports.createrecipe = function(req, res, next) {
  res.send("success");
  console.log(req.body);
};
