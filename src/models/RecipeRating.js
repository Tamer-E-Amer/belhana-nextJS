/**
 * @description this Model is used for rating system for recipes
 */
import mongoose from "mongoose";

const recipeRatingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "User of the rating should be provided"],
  },
  recipe: {
    type: mongoose.Schema.ObjectId,
    ref: "Recipe",
    required: [true, "REcipe to be rated should be provided"],
  },
  rating: {
    type: Number,
    required: [true, "Rating should be provided"],
    min: [1, "Rating should be at leat 1"],
    max: [5, "Rating should be below 5"],
  },
});

const RecipeRating =
  mongoose.models?.RecipeRating ||
  mongoose.model("RecipeRating", recipeRatingSchema);
export default RecipeRating;
