import { z } from "zod";

const flatValidation = z.object({
  body: z.object({
    squareFeet: z.number(),
    totalBedrooms: z.number(),
    totalRooms: z.number(),
    utilitiesDescription: z.string(),
    location: z.string(),
    description: z.string(),
    rent: z.number(),
    advanceAmount: z.number(),
  }),
});

const flatUpdateValidation = z.object({
  body: z.object({
    squareFeet: z.number().optional(),
    totalBedrooms: z.number().optional(),
    totalRooms: z.number().optional(),
    utilitiesDescription: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    rent: z.number().optional(),
    advanceAmount: z.number().optional(),
  }),
});

export const flatValidationSchema = {
  flatValidation,
  flatUpdateValidation,
};
