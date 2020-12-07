import express from "express";
import { startServer } from "./Server";
import { connectToDatabase } from "./database/connection";
import isAuth from "./middleware/isAuth";
import router from "./controllers/api";
import { clearOneTimeGroups } from "./scripts/clearOneTimeGroups";

const app = express();

app.use(express.json());
app.use(isAuth);

app.use("/api", router);

startServer(app);

connectToDatabase();

clearOneTimeGroups();
