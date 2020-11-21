import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  id: String,
  name: String,
  danceStyles: [String],
  description: String
});

export const Instructor = mongoose.model("Instructor", instructorSchema);
