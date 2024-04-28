import z from "zod";

const bookingStatusValidation = z.object({
  body: z.object({
    status: z.enum(["PENDING", "BOOKED", "REJECTED"]),
  }),
});

export const bookingValidation = {
  bookingStatusValidation,
};
