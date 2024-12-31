import mongoose from "mongoose";

const runSchema = new mongoose.Schema(
  {
    payrollId: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
      required: true,
    },

    route: {
      type: [String],
      required: true,
      uppercase: true,
    },

    timeTaken: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Runs = mongoose.model("Runs", runSchema);
