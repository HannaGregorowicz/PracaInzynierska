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

    res.status(200).send("Absence was reported.");
  } else {
    res.status(400).send("Unauthorized.");
  }
};

export const getUserAbsences = async (req: Request, res: Response) => {
  if (req.isAuth) {
    const person = await Person.findOne({ id: req.params.userId }).exec();
    if (person) {
      res.status(200).json(person.absences);
    }
  } else {
    res.status(400).send("Unauthorized.");
  }
};

export const makeAbsenceDone = async (req: Request, res: Response) => {
  if (req.isAuth) {
    await Person.findOneAndUpdate(
      { id: req.params.userId },
      {
        $pull: { absences: { groupId: req.body.groupId, date: req.body.date } }
      }
    );

    await Person.findOneAndUpdate(
      { id: req.params.userId },
      {
        $push: {
          absences: {
            groupId: req.body.groupId,
            date: req.body.date,
            status: "Odrobiona"
          }
        }
      }
    );

    res.status(200).send("Absence is done.");
  } else {
    res.status(400).send("Unauthorized.");
  }
};
