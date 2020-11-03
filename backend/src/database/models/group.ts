import mongoose from "mongoose";

export const groupSchema = new mongoose.Schema({
  id: String,
  className: String,
  day: String,
  startTime: Number,
  duration: Number,
  peopleLimit: Number,
  room: String,
  type: String,
  level: String,
  currentPeopleIds: [String]
});

const Group = (module.exports = mongoose.model("Group", groupSchema));
