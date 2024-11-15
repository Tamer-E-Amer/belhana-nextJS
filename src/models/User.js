import mongoose from "mongoose";
import { isEmail } from "validator";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email should be unique"],
    validate: [isEmail, "Invalid Email"],
  },
  avatar: {
    type: String,
    default: "/assets/imgs/avatar.png",
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password should at least 8 characters"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Confirm the provided password"],
    select: false,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Password and password confirm are not the same!",
    },
    role: {
      type: String,
      required: [true, "Role of the user is required"],
      enum: {
        values: ["user", "admin"],
        message:
          '{VALUE} is not supported. You should provide either "user" or "admin" ',
      },
    },
    isActive: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
});

// indexing

userSchema.index({ email: 1 });

/**
 * Middleware
 */

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Run hashing of the password only when the password has been actually modeified
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});
const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;
