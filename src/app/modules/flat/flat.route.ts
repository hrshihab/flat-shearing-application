import express from "express";
import { flatController } from "./flat.controller";
import validateRequest from "../../middleware/validateRequest";
import { flatValidationSchema } from "./flat.validation";
import auth from "../../middleware/auth";
const router = express.Router();

router.post(
  "/flats",
  auth(),
  validateRequest(flatValidationSchema.flatValidation),
  flatController.addFlat
);
router.get("/flats", auth(), flatController.getAllFlats);
router.put(
  "/flats/:flatId",
  auth(),
  validateRequest(flatValidationSchema.flatUpdateValidation),
  flatController.updateFlat
);

export const flatRoutes = router;
