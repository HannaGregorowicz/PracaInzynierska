import { Class } from "./models/class";
import { classes } from "../exampleData";
import { Group } from "./models/group";
import { groups } from "../exampleData";

export const seedDatabase = async () => {
  for (const oneClass of classes) {
    await new Class(oneClass).save();
  }

  for (const group of groups) {
    await new Group(group).save();
  }
  console.log("Database seeded.");
};

export const getClasses = async () => {
  return await Class.find();
};
