import { NextFunction, Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "http-status";
import handleZodError from "../errors/handleZodError";
import { ZodError } from "zod";
import ApiError from "../errors/ApiError";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let message = err.message || "Something went wrong!";
  let errorDetails = err;

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorDetails = simplifiedError?.errorDetails;
  }
  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    message = err.message;
    errorDetails = err;
  }
  res.status(INTERNAL_SERVER_ERROR).json({
    success: false,
    message: message,
    errorDetails: errorDetails || null || undefined,
  });
};

export default globalErrorHandler;
