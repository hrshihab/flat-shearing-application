import express from "express";
import { userController } from "./User.controller";

const router = express.Router();
console.log("Done");

router.post("/register", userController.createUser);

export const userRoutes = router;
