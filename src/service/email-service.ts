import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

class EmailService {
  private transporter!: Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: Number(process.env.NODEMAILER_PORT),
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASSWORD,
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
