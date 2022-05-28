import express, { Router, Request, Response } from "express";
import { ApiRoutes } from "./api";

const router: Router = express.Router();

router.get("/health", (req: Request, res: Response): void => {
  res.status(200).send({ health: "ok" });
});

router.use("/api", new ApiRoutes().getRoutes());

export { router };
