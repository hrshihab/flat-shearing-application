"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const bookingStatusValidation = zod_1.default.object({
    body: zod_1.default.object({
        status: zod_1.default.enum(["PENDING", "BOOKED", "REJECTED"]),
    }),
});
exports.bookingValidation = {
    bookingStatusValidation,
};
