const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  _id: String,
  title: String,
  description: String,
  cookTime: Number,
  cookTimeUnit: String,
  prepTime: Number,
  prepTimeUnit: String,
  servings: Number,
  ingredients: [
    {
      quantity: Number,
      unit: String,
      ingredient: String
    }
  ],
  steps: [
    {
      step: String
    }
  ],
  user: { type: Schema.Types.ObjectId, ref: "user" }
});

const ModelClass = mongoose.model("recipe", recipeSchema);

module.exports = ModelClass;
