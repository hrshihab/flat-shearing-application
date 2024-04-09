import { Request, Response } from "express";
import prisma from "../../../shared/prisma";
import sendResponse from "../../../shared/sendResponse";
import { userService } from "./User.service";
import httpStatus from "http-status";

const createUser = async (req: Request, res: Response) => {
  console.log("req body:", req.body);
  try {
    const result = await userService.createUser(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const userController = {
  createUser,
};
