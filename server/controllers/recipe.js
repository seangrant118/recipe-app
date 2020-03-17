const Recipe = require("../models/recipe");

exports.createrecipe = function(req, res, next) {
  const {
    _id,
    title,
    description,
    cookTime,
    cookTimeUnit,
    prepTime,
    prepTimeUnit,
    servings,
    ingredients,
    steps
  } = req.body;

  const recipe = new Recipe({
    _id,
    title,
    description,
    cookTime,
    cookTimeUnit,
    prepTime,
    prepTimeUnit,
    servings,
    ingredients,
    steps
  });

  recipe.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(recipe);
  });
};
