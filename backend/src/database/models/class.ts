import mongoose from "mongoose";

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

export const Class = mongoose.model("Class", classSchema);
