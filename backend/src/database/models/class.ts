import mongoose from "mongoose";

export interface IClass extends mongoose.Document {
  name: string;
  description: string;
  imageName: string;
  groups: {
    id: string;
    day: string;
    time: string;
    level: string;
  }[];
}

const classSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageName: String,
  groups: [
    {
      id: String,
      day: String,
      time: String,
      level: String
    }
  ]
});

export const Class = mongoose.model<IClass>("Class", classSchema);
