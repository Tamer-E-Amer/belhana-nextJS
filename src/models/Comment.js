import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    commentText: {
      type: String,
      required: [true, "comment is required"],
    },
    commentedBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "User of the comment is required"],
    },
    recipe: {
      type: mongoose.Schema.ObjectId,
      ref: "Recipe",
      required: [true, "Recipe is required"],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// indexing
commentSchema.index({ createdAt: -1 });

const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
export default Comment;
