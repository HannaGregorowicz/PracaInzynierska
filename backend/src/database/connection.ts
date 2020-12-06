import mongoose from "mongoose";
import config from "../config";

export const connectToDatabase = () => {
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);
  mongoose.set("useFindAndModify", false);

  mongoose.connect(config.DB_URL, () => {
    console.log("Connected to database.");
  });
};
