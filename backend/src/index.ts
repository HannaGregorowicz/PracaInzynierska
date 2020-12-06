import express from "express";
import { startServer } from "./Server";
import { connectToDatabase } from "./database/connection";
import isAuth from "./middleware/isAuth";
import router from "./controllers/api";

const app = express();

app.use(express.json());
app.use(isAuth);

app.use("/api", router);

startServer(app);

connectToDatabase();
