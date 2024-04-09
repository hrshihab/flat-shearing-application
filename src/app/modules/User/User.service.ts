import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const createUser = async (payload: any) => {
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
    const result: any = await prisma.$transaction(async (transactionClient) => {
      const createdUser = await transactionClient.user.create({
        data: userData,
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
    throw error;
  }
};

export const userService = {
  createUser,
};
