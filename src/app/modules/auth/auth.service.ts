import httpStatus from "http-status";
import prisma from "../../../shared/prisma";
import ApiError from "../../errors/ApiError";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import config from "../../../config";
import { generateToken, jwtHelper } from "../../../helper/jwtHelper";

const loginUser = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
    },
  });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  const isPasswordValid = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password");
  }

  // Generate an access token
  const data = { email: user.email };
  const secret = config.jwt.jwt_secret as string;
  const expiresIn = config.jwt.expires_in as string;
  const accessToken = await jwtHelper.generateToken(data, secret, expiresIn);

  // Create a new object without the password field
  const userWithoutPassword = {
    id: user.id,
    name: user.name,
    email: user.email,
    token: accessToken,
  };
  return userWithoutPassword;
};

export const authService = {
  loginUser,
};
