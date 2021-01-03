import { Request, Response } from "express";
import { Person } from "../database/models/person";

export const addAdminRights = async (req: Request, res: Response) => {
  if (req.isAuth) {
    await Person.findOneAndUpdate(
      { id: req.params.userId },
      { $set: { role: "admin" } }
    );

    res.status(200).send("Admin rights were added.");
  } else {
    res.status(400).send("Unauthorized.");
  }
};

export const removeAdminRights = async (req: Request, res: Response) => {
  if (req.isAuth) {
    await Person.findOneAndUpdate(
      { id: req.params.userId },
      { $set: { role: "student" } }
    );

    res.status(200).send("Admin rights were removed.");
  } else {
    res.status(400).send("Unauthorized.");
  }
};
