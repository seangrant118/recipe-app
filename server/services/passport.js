const passport = require("passport");
const User = require("../models/user");
const config = require("../config");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

// Setup options for JWT strat
const jwtOptions = {
  // Extract jwt from authorization header
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  // Secret to decode
  secretOrKey: config.secret
};

// Create Jwt strat
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // See if the user ID in payload exists in our db
  User.findById(payload.sub, function(err, user) {
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

// Tell passport to use this strategy
passport.use(jwtLogin);
