import express, { Application } from "express";
import { Server } from "http";
import "dotenv/config";

import { AppDataSource } from "./data-source";
import { router } from "./routes";

class App {
  private app!: Application;
  private port!: Number;
  private server!: Server;

  public initApp(): void {
    this.port = Number(process.env.PORT);
    this.app = express();

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(router);

    AppDataSource.initialize();

    this.server = this.app.listen(this.port, (): void => {
      console.log(`The app is listening on port ${this.port}`);
    });
  }

  public shutdownApp(): void {
    this.server.close();
  }
}

export { App };
