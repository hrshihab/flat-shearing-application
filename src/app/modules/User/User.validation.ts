import { z } from "zod";

const userCreateValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    bio: z.string().optional(),
    profession: z.string().optional(),
    address: z.string().optional(),
  }),
});

const userUpdateValidationSchema = z.object({
  body: z.object({
    bio: z.string().optional(),
    profession: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const userValidation = {
  userCreateValidationSchema,
  userUpdateValidationSchema,
};
