"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userCreateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        bio: zod_1.z.string().optional(),
        profession: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
const userUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bio: zod_1.z.string().optional(),
        profession: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.userValidation = {
    userCreateValidationSchema,
    userUpdateValidationSchema,
};
