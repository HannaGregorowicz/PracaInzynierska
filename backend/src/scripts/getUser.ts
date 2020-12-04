import { Request, Response } from "express";
import { Person } from "../database/models/person";

export const getUser = async (req: Request, res: Response) => {
  if (req.isAuth) {
    const personData = await Person.findOne({ id: req.params.personId }).exec();
    if (personData) {
      res.status(201).json(personData);
    }
  } else {
    res.status(400).send("Authorization error!");
  }
};
