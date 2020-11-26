import { Express } from "express";
import config from "./config";

export const startServer = (app: Express) => {
  app.listen(config.serverPort, () => {
    console.log(`Server listening on port ${config.serverPort}!`);
  });
};
