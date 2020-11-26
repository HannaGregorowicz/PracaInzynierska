import { Express, json } from "express";
import { routes } from "./routes";
import { isAuth } from "./middleware/isAuth";

export class Server {
  private app: Express;

  constructor(app: Express) {
    this.app = app;

    this.app.use(json());
    this.app.use(isAuth);

    routes(this.app);
  }

  public start = (port: number) => {
    this.app.listen(port, () =>
      console.log(`Server listening on port ${port}!`)
    );
  };
}
