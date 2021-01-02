import jwt from "jsonwebtoken";
import config from "../config";

export const isAdmin = () => {
  return isTokenValid() && localStorage.getItem("personRole") === "admin";
};

export const isHeadAdmin = () => {
  return (
    isAdmin &&
    localStorage.getItem("headAdmin") &&
    localStorage.getItem("headAdmin") === "true"
  );
};

export const isUser = () => {
  return isTokenValid() && localStorage.getItem("personRole") === "student";
};

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

export const saveToken = (token: string, email: string) => {
  localStorage.setItem("token", token);
  const parsedToken = JSON.parse(atob(token.split(".")[1]));
  localStorage.setItem("personId", parsedToken.personId);
  localStorage.setItem("personRole", parsedToken.personRole);
  if (email === "admin@moderndancestudio.com") {
    localStorage.setItem("headAdmin", "true");
  }
};
