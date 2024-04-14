import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { TFlat } from "./flat.interface";
import { searchableFlatFields } from "./flat.constant";

const addFlat = async (payload: TFlat) => {
  const result = await prisma.flat.create({
    data: {
      ...payload,
      availability: true,
    },
  });

  return result;
};

const getAllFlats = async (params: any) => {
  const { searchTerm } = params;
  const andConditions: Prisma.FlatWhereInput[] = [];

  if (searchTerm) {
    andConditions.push({
      OR: searchableFlatFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  console.log("andConditions", andConditions);
  const whereConditions: Prisma.FlatWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.flat.findMany({
    where: whereConditions,
  });

  return result;
};

export const flatService = {
  addFlat,
  getAllFlats,
};
