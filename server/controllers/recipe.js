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
    steps,
    userID
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
    steps,
    user: userID
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

  Recipe.findById(id)
    .populate("user", "_id email")
    .exec(function(err, recipe) {
      if (err) {
        return next(err);
      }
      console.log(recipe.user);
      res.json(recipe);
    });
};

exports.recipeSearch = function(req, res, next) {
  const title = req.params.id;

  Recipe.find(
    { title: { $regex: title, $options: "i" } },
    "title description",
    function(err, recipes) {
      if (err) {
        return next(err);
      }
      res.json(recipes);
    }
  );
};

exports.ingredientSearch = function(req, res, next) {
  const items = req.params.id.toUpperCase();
  const itemsArr = items.split(",");
  const [a, b = a, c = a, d = a] = itemsArr;
  Recipe.find(
    { "ingredients.ingredient": { $all: [a, b, c, d] } },
    "title description",
    function(err, recipes) {
      if (err) {
        return next(err);
      }
      res.json(recipes);
    }
  );
};
