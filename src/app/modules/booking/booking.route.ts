import express from "express";
import { bookingController } from "./booking.controller";
import auth from "../../middleware/auth";
import { bookingValidation } from "./booking.validation";
import validateRequest from "../../middleware/validateRequest";
const router = express.Router();

router.post("/booking-applications", auth(), bookingController.createBooking);
router.get("/booking-requests", auth(), bookingController.getBooking);
router.put(
  "/booking-requests/:bookingId",
  auth(),
  validateRequest(bookingValidation.bookingStatusValidation),
  bookingController.updateStatus
);

export const bookingRoutes = router;
