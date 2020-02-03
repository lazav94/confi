import * as nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import logger from "./logger";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USERNAME,
    pass: process.env.GMAIL_PASSWORD
  }
});

export default (mailOptions: MailOptions): Promise<any> =>
  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        reject(error);
        return logger.error(`error: ${error}`);
      }
      resolve(info.response);
      logger.info(`Message Sent ${info.response}`);
    });
  });
