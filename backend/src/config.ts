import dotenv from "dotenv";
dotenv.config();

const config = {
  serverPort: 5000,

  DB_URL: process.env.DB_URL,

  JWT_KEY: process.env.JWT_KEY
};

export default config;
