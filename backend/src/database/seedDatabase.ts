import { Class } from "./models/class";
import { classes } from "./exampleData";

export const seedDatabase = async () => {
  for (const oneClass of classes) {
    await new Class(oneClass).save();
  }
  console.log("Database seeded.");
};

export const getClasses = async () => {
  return await Class.find();
};
