import { ZodError } from "zod";
import { TErrorSources, TGenericErrorResponse } from "../interface/error";

const handleZodError = (error: ZodError): TGenericErrorResponse => {
  const errorMessage: TErrorSources = error.issues.map((issue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    };
  });
  const statusCode = 400;

  const message = error.issues.map((issue) => issue.message).join(". ");

  return {
    statusCode,
    message: message,
    errorDetails: {
      issues: errorMessage,
    } as unknown as TErrorSources, // Add type assertion here
  };
};

export default handleZodError;
