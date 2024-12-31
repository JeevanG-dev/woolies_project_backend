import express from "express";
import { isLoggedIn } from "../validation/validation.js";
import { runController } from "../controller/runController.js";

const router = express.Router();

router.post("/", isLoggedIn, runController);

export default router;
