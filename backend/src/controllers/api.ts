import express, { Request, Response } from "express";
import { register, isEmailInDb } from "../scripts/registerUser";
import { createToken } from "../scripts/loginUser";
import { getUser } from "../scripts/getUser";
import { getClasses, getGroups, getGroup } from "../scripts/getData";
import {
  signToGroup,
  signOutFromGroup,
  signToGroupOnce,
  signOutFromGroupOnce
} from "../scripts/signToGroup";
import { reportAbsence } from "../scripts/absences";

const router = express.Router();
// TODO: Add more status codes if enough time

router.get("/", async (req: Request, res: Response) => {});

router.get("/classes", (req: Request, res: Response) => {
  getClasses(req, res);
});

router.get("/groups", (req: Request, res: Response) => {
  getGroups(req, res);
});

router.get("/groups/:groupId", (req: Request, res: Response) => {
  getGroup(req, res);
});

router.put("/groups/signIn/:groupId", (req: Request, res: Response) => {
  signToGroup(req, res);
});

router.put("/groups/signInOnce/:groupId", (req: Request, res: Response) => {
  signToGroupOnce(req, res);
});

router.put("/groups/signOut/:groupId", (req: Request, res: Response) => {
  signOutFromGroup(req, res);
});

router.put("/groups/signOutOnce/:groupId", (req: Request, res: Response) => {
  signOutFromGroupOnce(req, res);
});

router.get("/userData/:personId", (req: Request, res: Response) => {
  getUser(req, res);
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

router.post("/absence", (req: Request, res: Response) => {
  reportAbsence(req, res);
});

export default router;
