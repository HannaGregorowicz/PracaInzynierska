import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
  id: String,
  name: String,
  danceStyles: [String],
  description: String
});

const Instructor = (module.exports = mongoose.model(
  "Instructor",
  instructorSchema
));
