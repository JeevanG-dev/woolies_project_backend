import { Runs } from "../schemas/runSchema.js";

export const runsController = {
  createRuns: async (details) => {
    try {
      const response = await Runs.create(details);
      return response;
    } catch (error) {
        console.log(error);
        
        throw {message:"Error"}
    }
  },
};
