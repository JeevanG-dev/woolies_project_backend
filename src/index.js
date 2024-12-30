import express from "express";
import { PORT } from "./config/serverConfig.js";
import connectDB from "./config/dbConfig.js";
import cookieParser from "cookie-parser";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use("/users", userRoute);
app.use("/auth", authRoute);



app.get("/ping", (req, res) => {
  return res.json({
    message: "pinged",
  });
});

app.listen(PORT, async () => {
  await connectDB();
  console.log("Listening to PORT", PORT);
});
