const jwt = require("jwt-simple");
const config = require("../config");
const User = require("../models/user");

// Create a jwt
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User already has email and password auth'd
  // Need to give them a token
  res.send({ token: tokenForUser(req.user) });
};

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  // if no email or password, return error
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: "You must provide an email and password" });
  }

  // See if a user with a given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) {
      return next(err);
    }

    // If a user with this email exists, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }

    // If a user with this email does not exist, created and save a new user record
    const user = new User({
      email: email,
      password: password
    });

    // Save user to DB
    user.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ token: tokenForUser(user) });
    });
  });
};
