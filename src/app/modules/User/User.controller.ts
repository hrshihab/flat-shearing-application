import { Request, Response } from "express";
import prisma from "../../../shared/prisma";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./User.service";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const createUser = catchAsync(async (req: Request, res: Response) => {
  //console.log("req body:", req.body);

  const result = await userService.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

export const userController = {
  createUser,
};
