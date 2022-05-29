import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

class EmailService {
  private transporter!: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
    });
  }

  async sendEmail(options: SendMailOptions) {
    try {
      await this.transporter.sendMail(options);
    } catch (e) {
      console.log(e);
    }
  }
}

export { EmailService };
