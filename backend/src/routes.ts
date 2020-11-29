import express, { Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";
import { register, isEmailInDb } from "./scripts/registerUser";
import { createToken } from "./scripts/loginUser";
import { getUserData } from "./scripts/getUserData";

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

router.get("/userData/:personId", async (req: Request, res: Response) => {
  await getUserData(req, res);
});

export default router;
