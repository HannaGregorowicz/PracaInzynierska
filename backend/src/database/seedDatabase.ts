import sha256 from "crypto-js/sha256";
import { nanoid } from "nanoid";
import { Class } from "./models/class";
import { classes, instructors } from "../exampleData";
import { Group } from "./models/group";
import { groups } from "../exampleData";
import { Person } from "./models/person";
import { Instructor } from "./models/instructor";

export const seedDatabase = async () => {
  for (const oneClass of classes) {
    await new Class(oneClass).save();
  }

  for (const group of groups) {
    await new Group(group).save();
  }

  for (const instructor of instructors) {
    await new Instructor(instructor).save();
  }

  await new Person({
    id: nanoid(),
    firstName: "Admin",
    lastName: "Admin",
    email: "admin@moderndancestudio.com",
    password: sha256("adminadmin").toString(),
    phone: "",
    role: "admin",
    groupsIds: [],
    oneTimeGroupsIds: [],
    absences: []
  }).save();
  console.log("Database seeded.");
};
