import mongoose from "mongoose";

export interface IPerson extends mongoose.Document {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  groupsIds: string[];
}

const personSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  phone: String,
  role: String,
  groupsIds: [String]
});

export const Person = mongoose.model<IPerson>("Person", personSchema);
