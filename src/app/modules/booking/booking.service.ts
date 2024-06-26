import prisma from "../../../shared/prisma";
import { Status } from "./booking.constant";
import { IBooking } from "./booking.interface";

const createBooking = async (payload: IBooking) => {
  console.log(payload);
  const { flatId, userId } = payload;
  const result = await prisma.booking.create({
    data: {
      flatId,
      userId,
    },
  });
  return result;
};

const getBooking = async () => {
  const result = await prisma.booking.findMany();
  return result;
};

const updateStatus = async (bookingId: string, payload: any) => {
  const { status } = payload;

  const result = await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status: status, // Constructing an object with 'set' operation
    },
  });
  return result;
};

export const bookingService = {
  createBooking,
  getBooking,
  updateStatus,
};
