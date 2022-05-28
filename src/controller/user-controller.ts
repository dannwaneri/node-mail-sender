import { Request, Response } from "express";
import { Utils } from "../utils";
import { User } from "../entity/user";

class UserController {
  public async subscribeUser(req: Request, res: Response) {
    const { email } = req.body;
    if (Utils.validadteEmail(email)) {
      const newUser = new User();
      newUser.email = email;
      try {
        await newUser.save();
        res.status(200).send("User subscribed!");
      } catch (e: unknown) {
        res.status(400).send("User subscribe error!");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  }

  public async unsubscribeUser(req: Request, res: Response) {
    const { email } = req.body;
    if (Utils.validadteEmail(email)) {
      try {
        const user = await User.findOneByOrFail({ email });
        await user.remove();
        res.status(200).send("User unsubscribed!");
      } catch (e) {
        res.status(400).send("User unsubscribe error!");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  }
}

export { UserController };
