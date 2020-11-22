import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";
import { register, isEmailInDb } from "./scripts/registerUser";

export const routes = (app: Express) => {
  app.get("/classes", async (req: Request, res: Response) => {
    res.json(await getClasses());
  });

  app.post("/register", (req: Request, res: Response) => {
    register(req.body);
    res.redirect("/");
  });

  app.get(
    "/register/emailExists/:email",
    async (req: Request, res: Response) => {
      try {
        res.json({ emailInDb: await isEmailInDb(req.params) });
      } catch (err) {
        console.error(err);
      }
    }
  );
};
