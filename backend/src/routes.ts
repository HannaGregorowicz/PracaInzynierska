import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";

export const routes = (app: Express) => {
  app.get("/classes", async (req: Request, res: Response) => {
    res.json(await getClasses());
  });

  app.post("/register", async (req: Request, res: Response) => {
    console.log("Register");
    console.log(req.body);
    // res.redirect("/");
  });
};
