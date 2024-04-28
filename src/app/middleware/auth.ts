import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import httpStatus from "http-status";
import { jwtHelper } from "../../helper/jwtHelper";
import { JwtPayload, Secret } from "jsonwebtoken";
import config from "../../config";

const auth = () => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You're not is authorized");
      }
      const verifiedUser = await jwtHelper.verifyToken(
        token,
        config.jwt.jwt_secret as Secret
      );
      req.user = verifiedUser as JwtPayload;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
