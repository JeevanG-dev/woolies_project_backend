import { JWT_SECRET } from "../config/serverConfig.js";
import { userRepository } from "../repository/userRepository.js";
import jwt from "jsonwebtoken";

export const authService = async (details) => {
  const payrollId = details.payrollId;
  const password = details.password;

  const user = await userRepository.findUser({ payrollId });

  if (!user) {
    throw { message: "No User Found" };
  }

  if (password != user.password) {
    throw { message: "Wrong Password" };
  }

  const tokken = jwt.sign(
    { payroll: user.payrollId, id: user._id,firstName:user.firstName },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
  return tokken;
};
