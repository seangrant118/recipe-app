const Authentication = require("./controllers/authentication");
const Recipe = require("./controllers/recipe");
const passportService = require("./services/passport");
const passport = require("passport");

// Authenticate using jwt, not using a cookie based session
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signin", requireSignin, Authentication.signin);
  app.post("/signup", Authentication.signup);
  app.post("/createrecipe", Recipe.createrecipe);
  app.get("/recipe/:id", Recipe.getRecipe);
  app.get("/search/recipe/:id", Recipe.recipeSearch);
  app.get("/search/ingredient/:id", Recipe.ingredientSearch);
};
