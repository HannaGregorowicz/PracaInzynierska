import dotenv from "dotenv";
dotenv.config();

const config = {
  JWT_KEY: process.env.JWT_KEY
};

export default config;
