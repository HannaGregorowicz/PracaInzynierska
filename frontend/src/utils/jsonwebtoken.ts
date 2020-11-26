import jwt from "jsonwebtoken";
import config from "../config";

export const isTokenValid = () => {
  let isValid = false;
  const token = localStorage.getItem("token");
  if (token && config.JWT_KEY) {
    jwt.verify(token, config.JWT_KEY, err => {
      if (err) {
        localStorage.clear();
      } else {
        isValid = true;
      }
    });
  }
  return isValid;
};

export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
  const parsedToken = JSON.parse(atob(token.split(".")[1]));
  localStorage.setItem("personId", parsedToken.personId);
  localStorage.setItem("personRole", parsedToken.personRole);
};
