import { Request, Response } from "express";
import { Utils } from "../utils";
import { User } from "../entity/user";
import { EmailService } from "../service/email-service";
import { createHash } from "crypto";
import ConfirmSubscribing from "../template/confirm-subscribing";

class UserController {
  private emailService!: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  public async subscribeUser(req: Request, res: Response) {
    const { email } = req.body;
    if (Utils.validadteEmail(email)) {
      const hash = createHash("sha512")
        .update(`${email + Date().toString()}`)
        .digest("hex");
      const newUser = new User();
      newUser.email = email;
      newUser.unsubscribeToken = hash;
      try {
        await newUser.save();
        res.status(200).send("User subscribed!");
      } catch (e: unknown) {
        console.error(e);
        res.status(400).send("User subscribe error!");
      }
      try {
        await this.emailService.sendEmail({
          from: '"Victo Principe" <victopessoa46@gmail.com>',
          to: "victo_10_@hotmail.com",
          subject: "Mail trap test",
          text: "Mail trap text",
          html: ConfirmSubscribing({
            unsubscribeToken: hash,
          }),
        });
      } catch (e) {
        console.log(e);
      }
    } else {
      res.status(400).send("Invalid email");
    }
  }

  public async unsubscribeUser(req: Request, res: Response) {
    const { token } = req.query;
    try {
      const user = await User.findOneByOrFail({
        unsubscribeToken: String(token),
      });
      if (user) {
        await user.remove();
        res.status(200).send("User unsubscribed!");
      } else {
        res.status(400).send("User not found!");
      }
    } catch (e) {
      res.status(400).send("User unsubscribe error!");
    }
  }
}

export { UserController };
