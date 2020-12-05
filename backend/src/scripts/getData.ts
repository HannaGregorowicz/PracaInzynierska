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

export const getGroup = async (req: Request, res: Response) => {
  if (req.isAuth) {
    const group = await Group.findOne({ id: req.params.groupId }).exec();
    if (group) {
      res.status(201).json(group);
    }
  } else {
    res.status(400).send("Authorization error!");
  }
};
