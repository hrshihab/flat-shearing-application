import config from "../config";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

// Generate an access token
export const generateToken = (
  payload: { email: string , id:string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: expiresIn,
  });
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};
