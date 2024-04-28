"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelper_1 = require("../../../helper/jwtHelper");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma_1.default.user.findUniqueOrThrow({
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
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const isPasswordValid = yield bcrypt_1.default.compare(payload.password, user.password);
    if (!isPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Invalid password");
    }
    // Generate an access token
    const data = { email: user.email, id: user.id };
    const secret = config_1.default.jwt.jwt_secret;
    const expiresIn = config_1.default.jwt.expires_in;
    const accessToken = yield jwtHelper_1.jwtHelper.generateToken(data, secret, expiresIn);
    // Create a new object without the password field
    const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: accessToken,
    };
    return userWithoutPassword;
});
exports.authService = {
    loginUser,
};
