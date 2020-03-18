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

exports.getRecipe = function(req, res, next) {
  const id = req.params.id;

  Recipe.findById(id, function(err, recipe) {
    if (err) {
      return next(err);
    }
    res.json(recipe);
  });
};

exports.recipeSearch = function(req, res, next) {
  const title = req.params.id;

  Recipe.find({ title: { $regex: title, $options: "i" } }, "title", function(
    err,
    recipes
  ) {
    if (err) {
      return next(err);
    }
    res.json(recipes);
  });
};

exports.ingredientSearch = function(req, res, next) {
  const items = req.params.id.toUpperCase();
  const itemsArr = items.split(",");
  const [a, b = a, c = a, d = a] = itemsArr;
  console.log(a, b, c, d);
  Recipe.find(
    { "ingredients.ingredient": { $all: [a, b, c, d] } },
    "title",
    function(err, recipes) {
      if (err) {
        return next(err);
      }
      res.json(recipes);
    }
  );
};
