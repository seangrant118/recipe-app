const Recipe = require("../models/recipe");

exports.createrecipe = function (req, res, next) {
  const {
    _id,
    title,
    description,
    image,
    cookTime,
    cookTimeUnit,
    prepTime,
    prepTimeUnit,
    servings,
    ingredients,
    steps,
    userID,
  } = req.body;

  const recipe = new Recipe({
    _id,
    title,
    description,
    image,
    cookTime,
    cookTimeUnit,
    prepTime,
    prepTimeUnit,
    servings,
    ingredients,
    steps,
    user: userID,
  });

  recipe.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send(recipe);
  });
};

exports.getRecipe = function (req, res, next) {
  const id = req.params.id;

  Recipe.findById(id)
    .populate("user", "_id email")
    .exec(function (err, recipe) {
      if (err) {
        return next(err);
      }
      res.json(recipe);
    });
};

exports.recipeSearch = function (req, res, next) {
  const title = req.params.id;

  Recipe.find(
    { title: { $regex: title, $options: "i" } },
    "title description image",
    function (err, recipes) {
      if (err) {
        return next(err);
      }
      res.json(recipes);
    }
  );
};

exports.ingredientSearch = function (req, res, next) {
  const items = req.params.id;
  const itemsArr = items.split(",");
  console.log(itemsArr);
  const [a, b = a, c = a, d = a] = itemsArr;
  console.log(a, b, c, d);
  Recipe.find(
    { "ingredients.ingredient": { $all: [a, b, c, d] } },
    "title description image",
    function (err, recipes) {
      if (err) {
        return next(err);
      }
      console.log(recipes);
      res.json(recipes);
    }
  );
};

exports.deleteRecipe = function (req, res, next) {
  const _id = req.params.id;
  Recipe.findByIdAndDelete(_id, function (err, result) {
    if (err) {
      return next(err);
    }
    console.log(result);
    res.send(result);
  });
};

exports.editRecipe = function (req, res, next) {
  console.log(req.body);
  const {
    _id,
    title,
    description,
    image,
    cookTime,
    cookTimeUnit,
    prepTime,
    prepTimeUnit,
    servings,
    ingredients,
    steps,
    userID,
  } = req.body;
  Recipe.findByIdAndUpdate(
    _id,
    {
      title,
      description,
      image,
      cookTime,
      cookTimeUnit,
      prepTime,
      prepTimeUnit,
      servings,
      ingredients,
      steps,
      userID,
    },
    function (err, edited) {
      if (err) {
        return next(err);
      }
      res.send(edited);
    }
  );
};
