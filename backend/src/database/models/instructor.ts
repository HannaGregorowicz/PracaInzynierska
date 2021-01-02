import mongoose from "mongoose";

export interface IInstructor extends mongoose.Document {
  id: string;
  name: string;
  danceStyles: string[];
  description: string;
  imageName: string;
}

const instructorSchema = new mongoose.Schema({
  id: String,
  name: String,
  danceStyles: [String],
  description: String,
  imageName: String
});

export const Instructor = mongoose.model("Instructor", instructorSchema);
