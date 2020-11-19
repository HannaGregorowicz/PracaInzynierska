import express from "express";
import { Server } from "./Server";
import { connectToDatabase } from "./database/connection";
// import { seedDatabase } from "./database/seedDatabase";
const app = express();

const port = 5000;

const server = new Server(app);

(async () => {
  server.start(port);
  connectToDatabase();
  // await seedDatabase();
})();
