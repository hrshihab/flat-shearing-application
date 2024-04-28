"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError_1 = __importDefault(require("../errors/handleZodError"));
const zod_1 = require("zod");
const ApiError_1 = __importDefault(require("../errors/ApiError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let message = err.message || "Something went wrong!";
    let errorDetails = err;
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, handleZodError_1.default)(err);
        statusCode = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.statusCode;
        message = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.message;
        errorDetails = simplifiedError === null || simplifiedError === void 0 ? void 0 : simplifiedError.errorDetails;
    }
    if (err instanceof ApiError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
        errorDetails = err;
    }
    res.status(statusCode).json({
        success: false,
        message: message,
        errorDetails: errorDetails || null || undefined,
    });
};
exports.default = globalErrorHandler;
