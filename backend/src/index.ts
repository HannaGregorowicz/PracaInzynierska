import express from "express";
import { Server } from "./Server";
import { connectToDatabase } from "./database/connection";
const app = express();

const port = 5000;

const server = new Server(app);
server.start(port);

connectToDatabase();
