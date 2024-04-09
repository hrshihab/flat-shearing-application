import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { TUser } from "./User.interface";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";

const prisma = new PrismaClient();

const createUser = async (payload: TUser) => {
  try {
    const hashedPassword = await bcrypt.hash(payload.password, 10);
    const userData = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
    };
    const userProfileData = {
      bio: payload.bio,
      profession: payload.profession,
      address: payload.address,
    };
    const result = await prisma.$transaction(async (transactionClient) => {
      const createdUser = await transactionClient.user.create({
        data: userData,
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      const createUserProfile = await transactionClient.userProfile.create({
        data: {
          ...userProfileData,
          user: { connect: { id: createdUser.id } },
        },
        include: {
          user: true,
        },
      });
      return createdUser;
    });
    return result;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User registration failed");
  }
};

export const userService = {
  createUser,
};
