import { User } from "../schemas/userSchema.js";

export const userRepository = {
  createUser: async function (userDetails) {
    const response = User.create(userDetails);
    return response;
  },
  findUser: async (details) => {
    const response = User.findOne({ ...details });

    return response;
  },
};
