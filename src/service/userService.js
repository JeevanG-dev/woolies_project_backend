import { response } from "express";
import { userRepository } from "../repository/userRepository.js";

export const userService = {
  addUsers: async (userDetails) => {
    try {
      const response = await userRepository.createUser(userDetails);
      return response;
    } catch (error) {
        console.log(error);
        
    }
  },
};
