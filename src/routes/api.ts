import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get("/subscribe", (req: Request, res: Response) => {
  res.status(200).send({ res: "Subscribed" });
});

router.get("/unsubscribe", (req: Request, res: Response) => {
  res.status(200).send({ res: "Unsubscribed" });
});

export { router };
