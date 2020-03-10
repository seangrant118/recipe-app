const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

// Authenticate using jwt, not using a cookie based session
const requireAuth = passport.authenticate("jwt", { session: false });

module.exports = function(app) {
  app.get("/", requireAuth, function(req, res) {
    res.send({ hi: "there" });
  });
  app.post("/signup", Authentication.signup);
};
