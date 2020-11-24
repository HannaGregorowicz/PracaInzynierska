import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";
import { register, isEmailInDb } from "./scripts/registerUser";
import { createToken } from "./scripts/loginUser";

// TODO: Add more status codes if enough time

export const routes = (app: Express) => {
  app.get("/classes", async (req: Request, res: Response) => {
    res.json(await getClasses());
  });

  app.post("/register", async (req: Request, res: Response) => {
    await register(req.body);
    res.redirect("/");
  });

  app.post("/login", async (req: Request, res: Response) => {
    const token = await createToken(req.body);
    if (token) {
      res.status(200).send(token);
    } else {
      res.status(401).send("Authentication error");
    }
  });

  app.get(
    "/register/emailExists/:email",
    async (req: Request, res: Response) => {
      res.json({ emailInDb: await isEmailInDb(req.params) });
    }
  );
};
