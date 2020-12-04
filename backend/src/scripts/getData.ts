import { Request, Response } from "express";
import { Group } from "../database/models/group";
import { Class } from "../database/models/class";

export const getClasses = async (req: Request, res: Response) => {
  const classes = await Class.find();
  if (classes) {
    res.status(201).json(classes);
  }
};

export const getGroups = async (req: Request, res: Response) => {
  const groups = await Group.find();
  if (groups) {
    res.status(201).json(groups);
  }
};
