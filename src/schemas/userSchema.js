import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },

    payrollId: {
      type: String,
      unique: true,
      required: [true, "Pay ID must required"],
      trim: true,
      minlength: 7,
      maxlength: 7,
    },
    password: {
      type: String,
      required: true,
      maxlength: 10,
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
