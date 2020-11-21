import mongoose from "mongoose";

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

export const Person = mongoose.model("Person", personSchema);
