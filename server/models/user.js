const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

// Define Model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

// On Savehook, encypt password
userSchema.pre("save", function(next) {
  // Access to user model
  const user = this;

  // Generate a salt, then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) {
      return next(err);
    }

    // Hash (encrypt) our password, using the salt, then run callback
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) {
        return next(err);
      }

      // Overwrite plain text password with encrypted password
      user.password = hash;
      next();
    });
  });
});
// Create model class
const ModelClass = mongoose.model("user", userSchema);

// Export Model
module.exports = ModelClass;
