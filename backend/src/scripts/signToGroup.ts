import { Request, Response } from "express";
import { Group } from "../database/models/group";
import { Person } from "../database/models/person";

export const signToGroup = async (req: Request, res: Response) => {
  if (req.isAuth) {
    const group = await Group.findOne({ id: req.params.groupId });
    if (group && !group.peopleIds.includes(req.personId)) {
      await Group.findOneAndUpdate(
        { id: req.params.groupId },
        { $push: { peopleIds: req.personId } }
      );
      await Person.findOneAndUpdate(
        { id: req.personId },
        { $push: { groupsIds: req.params.groupId } }
      );
      res.status(201).send("User was signed.");
    } else {
      res.status(409).send("User already signed to this group!");
    }
  }
};
