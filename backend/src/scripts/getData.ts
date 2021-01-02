import { Request, Response } from "express";
import { Group } from "../database/models/group";
import { Class } from "../database/models/class";
import { Person } from "../database/models/person";
import { Instructor } from "../database/models/instructor";

export const getClasses = async (req: Request, res: Response) => {
  const classes = await Class.find();
  if (classes) {
    res.status(201).json(classes);
  }
};

export const getInstructors = async (req: Request, res: Response) => {
  const instructors = await Instructor.find();
  if (instructors) {
    res.status(201).json(instructors);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await Person.find();
  if (users) {
    res.status(201).json(users);
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
