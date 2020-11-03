import mongoose from "mongoose";
import { groupSchema } from "./group";

const classSchema = new mongoose.Schema({
  name: String,
  description: String,
  groups: [groupSchema]
});

const Class = (module.exports = mongoose.model("Class", classSchema));
