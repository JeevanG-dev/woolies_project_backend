import mongoose from "mongoose";
import { MONGO_DB } from "./serverConfig.js";

async function connectDB() {
  try {
    await mongoose.connect(MONGO_DB);
    console.log("successfully connected to MongoDB...");
  } catch (error) {
    console.log("could not connect to mongo");
    
    console.log(error);
  }
}

export default connectDB;
