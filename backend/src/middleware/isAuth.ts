import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../config";

declare global {
  namespace Express {
    export interface Request {
      isAuth: boolean;
      personId: string;
    }
  }
}

export const isAuth = (req: Request, res: Response, next: Function) => {
  req.isAuth = false;
  const authHeader = req.get("Authorization");

  if (authHeader) {
    const token = authHeader.split(" ")[2];
    if (token && token !== "") {
      let decodedToken;
      try {
        decodedToken = jwt.verify(token, config.JWT_KEY);
      } catch (err) {
        console.log(err);
        return next();
      }
      if (decodedToken) {
        req.isAuth = true;
        req.personId = decodedToken.personId;
        return next();
      }
    }
  }
  return next();
};

export default isAuth;
