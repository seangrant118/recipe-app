const User = require("../models/user");

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

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
      res.json({ success: true });
    });
  });
};
