import dotenv from "dotenv";
dotenv.config();

const config = {
  DB_URL: process.env.DB_URL,

  JWT_KEY: process.env.JWT_KEY
};

export default config;
