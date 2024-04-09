import express from "express";
import { userController } from "./User.controller";
import { userValidation } from "./User.validation";
import validateRequest from "../../middleware/validateRequest";

const router = express.Router();
console.log("Done");

router.post(
  "/register",
  validateRequest(userValidation.userCreateValidationSchema),
  userController.createUser
);

export const userRoutes = router;
