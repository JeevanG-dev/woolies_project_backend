import mongoose from "mongoose";

const runSchema = new mongoose.Schema(
  {
    loader: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    route: {
      type: String,
      required: true,
    },

    timeTaken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Runs = mongoose.model("Runs", runSchema);
