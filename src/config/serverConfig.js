import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_DB = process.env.MONGO_DB;
export const JWT_SECRET = process.env.JWT_SECRET;
