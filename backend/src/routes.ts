import express, { Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";
import { register, isEmailInDb } from "./scripts/registerUser";
import { createToken } from "./scripts/loginUser";

const router = express.Router();
// TODO: Add more status codes if enough time

router.get("/", async (req: Request, res: Response) => {});

router.get("/classes", async (req: Request, res: Response) => {
  res.json(await getClasses());
});

router.post("/register", async (req: Request, res: Response) => {
  await register(req.body);
  res.redirect("/");
});

router.post("/login", async (req: Request, res: Response) => {
  const token = await createToken(req.body);
  if (token) {
    res.status(200).send(token);
  } else {
    res.status(401).send("Authentication error");
  }
});

router.get(
  "/register/emailExists/:email",
  async (req: Request, res: Response) => {
    res.json({ emailInDb: await isEmailInDb(req.params) });
  }
);

export default router;
