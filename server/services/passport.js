const passport = require("passport");
const User = require("../models/user");
const config = process.env.secret || require("../config").secret;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

// Create Local Strat
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, function (
  email,
  password,
  done
) {
  // Verify email and password
  User.findOne({ email: email }, function (err, user) {
    // Error
    if (err) {
      return done(err);
    }
    // User not found
    if (!user) {
      return done(null, false);
    }

    // Compare passwords - is 'password' equal to user.password?
    user.comparePassword(password, function (err, isMatch) {
      // If error
      if (err) {
        return done(err);
      }

      // If not a match
      if (!isMatch) {
        return done(null, false);
      }

      // If a match
      return done(null, user);
    });
  });
});

// Setup options for JWT strat
const jwtOptions = {
  // Extract jwt from authorization header
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // Secret to decode
  secretOrKey: config,
};

// Create Jwt strat
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user ID in payload exists in our db
  User.findById(payload.sub, function (err, user) {
    // If error
    if (err) {
      return done(err, false);
    }

    if (user) {
      // If it does, call done with user
      done(null, user);
    } else {
      // Otherwise call done without user
      done(null, false);
    }
  });
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
