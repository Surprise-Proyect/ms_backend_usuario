import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const verifytoken = (token) => {

    jwt.verify(token, process.env.TOKEN_PRIVATEKEY);
}