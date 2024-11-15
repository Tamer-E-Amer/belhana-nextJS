import mongoose from "mongoose";
import slugify from "slugify";
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category should have a title"],
      unique: [true, "Title should be unique"],
      minlength: [4, "Title should be at least 4 character "],
      enum: {
        values: [
          "Fish",
          "Meat",
          "Poultry",
          "Pastry",
          "Rice",
          "Soup",
          "Stuffed food",
          "Sweets",
          "Sandwiches",
          "Pasta",
        ],
        message:
          "{VALUE} is not supported. You should provide one of the following: 'Fish','Meat','Poultry','Pastry','Rice','Soup','Stuffed food','Sweets','Sandwiches','Pasta",
      },
    },
    description: {
      type: String,
      trim: true,
    },
    img: {
      type: String,
      required: [true, "Category should have a default image"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: [true, "a Slug should be unique"],
    },
  },
  { timestamps: true }
);

// indexing
categorySchema.index({ slug: 1 });

/**
 * Middlewares
 */
// Document middleware: run before save and create operations
categorySchema.pre("save", function (next) {
  if (this.isModified("title") || this.isNew) {
    this.slug = slugify(this.title.trim(), { lower: true });
  }
  next();
});

// console.log(mongoose.models);
const Category =
  mongoose.models?.Category || mongoose.model("Category", categorySchema);
export default Category;
