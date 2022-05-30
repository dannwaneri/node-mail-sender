import e, { Request, Response } from "express";
import { Utils } from "../utils";
import { User } from "../entity/user";
import { EmailService } from "../service/email-service";
import { createHash } from "crypto";

class UserController {
  private emailService!: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  public async subscribeUser(req: Request, res: Response) {
    const { email } = req.body;
    if (Utils.validadteEmail(email)) {
      const newUser = new User();
      newUser.email = email;
      newUser.unsubscribeToken = createHash("sha512")
        .update(`${email + Date().toString()}`)
        .digest("hex");
      try {
        await newUser.save();
        try {
          await this.emailService.sendEmail({
            from: '"Victo Principe" <victopessoa46@gmail.com>',
            to: "victo_10_@hotmail.com",
            subject: "Mail trap test",
            text: "Mail trap text",
            html: "<b>Hello World</b>",
          });
        } catch (e) {
          console.log(e);
        }
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
    const { token } = req.query;
    if (Utils.validadteEmail(email)) {
      try {
        const user = await User.findOneByOrFail({ email });
        if (token === user.unsubscribeToken) {
          await user.remove();
          res.status(200).send("User unsubscribed!");
        } else {
          res.status(400).send("User not found!");
        }
      } catch (e) {
        res.status(400).send("User unsubscribe error!");
      }
    } else {
      res.status(400).send("Invalid email");
    }
  }
}

export { UserController };
