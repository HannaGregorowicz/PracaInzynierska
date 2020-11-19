import { Express, Request, Response } from "express";
import { getClasses } from "./database/seedDatabase";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.get("/", (req: Request, res: Response) => {
      res.send("It works!");
    });

    this.app.get(
      "/classes",
      async (req: Request, res: Response): Promise<void> => {
        res.json(await getClasses());
      }
    );
  }

  public start(port: number): void {
    this.app.listen(port, () =>
      console.log(`Server listening on port ${port}!`)
    );
  }
}
