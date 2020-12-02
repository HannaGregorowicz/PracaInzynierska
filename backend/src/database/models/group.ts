import mongoose from "mongoose";

export interface IGroup extends mongoose.Document {
  id: string;
  className: string;
  day: string;
  instructor: string;
  time: string;
  peopleLimit: number;
  room: string;
  level: string;
  peopleIds: string[];
}

export const groupSchema = new mongoose.Schema({
  id: String,
  className: String,
  day: String,
  instructor: String,
  time: String,
  peopleLimit: Number,
  room: String,
  level: String,
  peopleIds: [String]
});

export const Group = mongoose.model<IGroup>("Group", groupSchema);
