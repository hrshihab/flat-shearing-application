"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const auth_1 = __importDefault(require("../../middleware/auth"));
const booking_validation_1 = require("./booking.validation");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const router = express_1.default.Router();
router.post("/booking-applications", (0, auth_1.default)(), booking_controller_1.bookingController.createBooking);
router.get("/booking-requests", (0, auth_1.default)(), booking_controller_1.bookingController.getBooking);
router.put("/booking-requests/:bookingId", (0, auth_1.default)(), (0, validateRequest_1.default)(booking_validation_1.bookingValidation.bookingStatusValidation), booking_controller_1.bookingController.updateStatus);
exports.bookingRoutes = router;
