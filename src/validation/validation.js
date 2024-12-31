import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";

export function isLoggedIn(req, res, next) {
  const tokken = req.cookies["authToken"];

  if (!tokken)
    return res.status(401).json({
      success: false,
      data: {},
      error: "Not authenticated",
      message: "No auth Token Provided",
    });

  try {
    const decoded = jwt.verify(tokken, JWT_SECRET);

    if (!decoded)
      return res.status(401).json({
        success: false,
        data: {},
        error: "Not authenticated",
        message: "invalid tokken provideed",
      });

    req.user = {
      payrollId: decoded.payroll,
      id: decoded.id,
      firstName: decoded.firstName,
    };

    next();
  } catch (error) {
    res.status(400).json({
      message: "Token Expired",
    });
  }
}
 
