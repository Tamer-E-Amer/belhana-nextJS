import mongoose from "mongoose";
import slugify from "slugify";
import RecipeRating from "./RecipeRating";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A recipe should have a title"],
      unique: [true, "Title of the recipe should be unique"],
    },
    description: {
      type: String, 
      required: [true, "Recipe should have a description"],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: [true, "A recipe should have a cover image"],
    },
    likes: {
      type: Number,
      default: 0,
    },
    likedBy: {
      type: [mongoose.Schema.ObjectId],
      ref: "User",
      required: [true, "User who likes this recipe should be provided"],
    },
    pathToFBPage: {
      type: String,
      required: [true, "Path to facebook page is required"],
    },
    category: {
      type: [mongoose.Schema.ObjectId],
      ref: "Category",
      required: [true, "A recipe should benong to a certain Category"],
    },
    suitableToDieters: {
      type: Boolean,
      default: false,
    },
    avgTimeTobeFinished: Number,
    isRamadanRecipe: {
      type: Boolean,
      default: false,
    },
    isFried: {
      type: Boolean,
      default: false,
    },
    isEconomic: {
      type: Boolean,
      default: false,
    },
    hasAvideo: {
      type: Boolean,
      default: false,
    },
    videoLink: String,
    isInGermany: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isQuickPrepared: {
      type: Boolean,
      default: false,
    },
    comments: {
      type: [mongoose.Schema.ObjectId],
      ref: "Comment",
    },
  },
  { timestamps: true }
);

// Indexing

recipeSchema.index({ slug: 1, created_at: 1 });

/**
 * Middlewares
 */

// Docuemnt middleware
recipeSchema.pre("save", function (next) {
  if (this.isModified("title") || this.isNew) {
    this.slug = slugify(this.title.trim(), { lower: true });
  }
  next();
});

// Virtuals

recipeSchema.virtual("AvgRating").get(function () {
  return RecipeRating.aggregate([
    {
      $match: { recipe: this._id },
    },
    {
      $group: { _id: null, average: { $avg: "$rating" } },
    },
  ]).then((result) => (result.length > 0 ? result[0].average : 0));
});

const Recipe =
  mongoose.models?.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
