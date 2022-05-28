import express, { Router, Request, Response } from "express";
import { router as api } from "./api";

const router: Router = express.Router();

router.get("/health", (req: Request, res: Response) => {
  res.status(200).send({ health: "ok" });
});

router.use("/api", api);

export { router };
