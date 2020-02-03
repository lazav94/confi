import { Request, Response } from "express";
import BookingService from "./booking.service";
import { IBooking } from "./booking.model";
// TODO use custome solution instead validator
import validator from "validator";
import uuid from "uuid";
import sendEmail from "../../services/mailer";
import UserRegisterBody from "../../models/userRegisterBody.model";
import ErrorObject from "../../models/error.model";
import bookingService from "./booking.service";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import { generateVerificationEmail } from "../../services/utils";

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await bookingService.getAllBookings();
    res.send(bookings).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking: IBooking | null = await BookingService.getBookingById(id);
    return res.send(booking).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
export const createBooking = async (req: Request, res: Response) => {
  try {
    const newBooking: IBooking | null = await BookingService.createBooking(
      req.body
    );

    res.send(newBooking).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};
export const updateBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const booking: IBooking | null = await BookingService.updateBooking(
      id,
      req.body
    );
    res.send(booking).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};

export const deleteBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedBooking = await BookingService.deleteBookingById(id);
    res.send(deletedBooking).status(200);
  } catch (error) {
    return res.send({ error: true, errorObject: error }).status(400);
  }
};

const checkEmptyFields = (fields: UserRegisterBody) => {
  const { firstname, lastname, email, phone } = fields;
  let errorMessage = "";
  if (!firstname) {
    errorMessage += "Please enter your first name";
  }
  if (!lastname) {
    errorMessage += "Please enter your last name";
  }
  if (!email) {
    errorMessage += "Please enter your email";
  }
  if (!phone) {
    errorMessage += "Please enter your phone number";
  }
  return {
    errorMessage,
    error: errorMessage !== ""
  };
};

// Admin login
export async function register(req: Request, res: Response) {
  // TODO call service (DB handing)

  const errorObject: ErrorObject = checkEmptyFields(req.body);

  const { firstname, lastname, email, phone } = req.body;

  if (!validator.isEmail(email)) {
    errorObject.errorMessage += "Not valid email format";
  }
  if (!validator.isMobilePhone(phone)) {
    errorObject.errorMessage += "Not valid phone number format";
  }

  if (errorObject.errorMessage) {
    return res.status(400).send(errorObject);
  }
  // Generate token - can use JWT or hashing for more secure approach
  const token = uuid();
  const verificationURL = `${process.env.URL}/booking/verification/${token}`;
  const mailOptions: MailOptions = {
    from: "Confi",
    to: email,
    subject: "Verification Email",
    html: generateVerificationEmail(verificationURL)
  };
  // Sending email
  await sendEmail(mailOptions);

  // Create new booking with token and flag verified set to false
  await BookingService.createBooking({ ...req.body, token });

  res.sendStatus(200);
}

export async function verification(req: Request, res: Response) {
  const { token } = req.params;
  if (!token) {
    return res.send({ error: true, errorMessage: "Token invalid" });
  }
  // get booking by token
  const booking: IBooking | null = await BookingService.getBookingByToken(
    token
  );
  if (!booking) {
    return res.send({ error: true, errorMessage: "Token invalid" });
  }

  booking.verified = true;
  await booking.save();

  res.sendStatus(200);
}
