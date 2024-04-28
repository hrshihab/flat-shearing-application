"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError = (error) => {
    const errorMessage = error.issues.map((issue) => {
        return {
            path: issue === null || issue === void 0 ? void 0 : issue.path[issue.path.length - 1],
            message: issue === null || issue === void 0 ? void 0 : issue.message,
        };
    });
    const statusCode = 400;
    const message = error.issues.map((issue) => issue.message).join(". ");
    return {
        statusCode,
        message: message,
        errorDetails: {
            issues: errorMessage,
        }, // Add type assertion here
    };
};
exports.default = handleZodError;
