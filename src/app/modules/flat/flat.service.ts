import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { TFlat } from "./flat.interface";
import { searchableFlatFields } from "./flat.constant";
import { IOptions, paginationHelper } from "../../../helper/paginationHelper";
import { IPaginationOptions } from "../../interface/pagination";

const addFlat = async (payload: TFlat) => {
  const result = await prisma.flat.create({
    data: {
      ...payload,
      availability: true,
    },
  });

  return result;
};

const getAllFlats = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
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

  if (options.availability) {
    andConditions.push({
      availability: options.availability === "true",
    });
  }

  //console.log("andConditions", andConditions);
  const whereConditions: Prisma.FlatWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.flat.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });
  const total = await prisma.flat.count({
    where: whereConditions,
  });

  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const updateFlat = async (flatId: string, payload: TFlat) => {
  const result = await prisma.flat.update({
    where: {
      id: flatId,
    },
    data: {
      ...payload,
    },
  });

  return result;
};

export const flatService = {
  addFlat,
  getAllFlats,
  updateFlat,
};
