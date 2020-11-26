import express from "express";
import { startServer } from "./Server";
import { connectToDatabase } from "./database/connection";
import isAuth from "./middleware/isAuth";
import router from "./routes";
// import { seedDatabase } from "./database/seedDatabase";

const app = express();

app.use(express.json());
app.use(isAuth);

app.use(router);

startServer(app);

connectToDatabase();
