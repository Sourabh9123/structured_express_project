import express from "express";
import { getAllUsers, createUser } from "../controllers/userController.js";
import path from "path";
import testMiddleware from "../middlewares/authMiddleware.js";
console.log("Resolved path:", path.resolve("../controllers/userController.js"));
const router = express.Router();

router.get("/", testMiddleware, getAllUsers); // we can call multiple middlewares here
router.post("/", testMiddleware, createUser);

export default router;
