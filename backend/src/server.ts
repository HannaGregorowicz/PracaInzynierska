import { Express, Request, Response, json } from "express";
import { routes } from "./routes";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(json());
    this.app.get("/", (req: Request, res: Response) => {
      res.send("It works!");
    });

    routes(this.app);
  }

  public start = (port: number) => {
    this.app.listen(port, () =>
      console.log(`Server listening on port ${port}!`)
    );
  };
}
