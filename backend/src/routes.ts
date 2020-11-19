import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";

export const routes = (app: Express) => {
  app.get(
    "/classes",
    async (req: Request, res: Response): Promise<void> => {
      res.json(await getClasses());
    }
  );
};
