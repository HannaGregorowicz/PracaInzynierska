import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";
import { register } from "./scripts/registerUser";

export const routes = (app: Express) => {
  app.get("/classes", async (req: Request, res: Response) => {
    res.json(await getClasses());
  });

  app.post("/register", async (req: Request, res: Response) => {
    register(req.body);
    res.redirect("/");
  });
};
