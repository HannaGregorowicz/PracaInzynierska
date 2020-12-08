import { Request, Response } from "express";
import { Group } from "../database/models/group";
import { Person } from "../database/models/person";

export const reportAbsence = async (req: Request, res: Response) => {
  if (req.isAuth) {
    await Group.findOneAndUpdate(
      { id: req.body.groupId },
      { $push: { absentPeopleIds: req.personId } }
    );

    const newAbsence = {
      groupId: req.body.groupId,
      date: new Date(req.body.date),
      status: "Do odrobienia"
    };

    await Person.findOneAndUpdate(
      { id: req.personId },
      { $push: { absences: newAbsence } }
    );
  } else {
    res.status(400).send("Unauthorized.");
  }
};
