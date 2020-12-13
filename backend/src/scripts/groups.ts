import { Request, Response } from "express";
import { Group } from "../database/models/group";
import { Class } from "../database/models/class";
import { Person } from "../database/models/person";
import { nanoid } from "nanoid";

export const addGroup = async (req: Request, res: Response) => {
  if (req.isAuth) {
    const body = req.body;
    if (
      body &&
      body.name &&
      body.level &&
      body.instructor &&
      body.day &&
      body.time
    ) {
      const id = nanoid();
      await new Group({
        id: id,
        name: body.name,
        day: body.day,
        instructor: body.instructor,
        time: body.time,
        peopleLimit: 12,
        room: "niebieska",
        level: body.level,
        peopleIds: [],
        oneTimePeopleIds: [],
        absentPeopleIds: []
      }).save();

      await Class.findOneAndUpdate(
        { name: body.name },
        {
          $push: {
            groups: {
              id: id,
              day: body.day,
              time: body.time,
              level: body.level
            }
          }
        }
      );

      res.status(200).send("Group was created.");
    } else {
      res.status(401).send("Invalid body!");
    }
  } else {
    res.status(400).send("Unauthorized.");
  }
};

export const deleteGroup = async (req: Request, res: Response) => {
  if (req.isAuth) {
    await Group.findOneAndDelete({ id: req.params.groupId });

    await Class.findOneAndUpdate(
      { name: req.params.groupName },
      { $pull: { groups: { id: req.params.groupId } } }
    );

    await Person.findOneAndUpdate(
      { groupsIds: req.params.groupId },
      { $pull: { groupsIds: req.params.groupId } }
    );

    await Person.findOneAndUpdate(
      { oneTimeGroupsIds: req.params.groupId },
      { $pull: { oneTimeGroupsIds: req.params.groupId } }
    );

    await Person.findOneAndUpdate(
      { absences: { $elemMatch: { groupId: req.params.groupId } } },
      { $pull: { absences: { groupId: req.params.groupId } } }
    );

    res.status(200).send("Group was deleted.");
  } else {
    res.status(400).send("Unauthorized.");
  }
};
