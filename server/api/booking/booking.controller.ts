// TODO use custome solution instead validator
import validator from "validator";
import { Request, Response } from "express";
// TODO maybe use jwt instead or custome algorithm for hash checking
import bcrypt from "bcrypt";
import logger from "../../services/logger";
import BookingService from "./booking.service";
import { IBooking } from "./booking.model";

import UserRegisterBody from "../../models/userRegisterBody.model";
import ErrorObject from "../../models/error.model";
import bookingService from "./booking.service";

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

// TODO don't expose this
// TODO change how to call it (not API)
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
  const { firstName, lastName, email, phone } = fields;
  let errorMessage = "";
  if (!firstName) {
    errorMessage += "Please enter your first name";
  }
  if (!lastName) {
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

const generateURL = () => `${req.host}/booking/${uuid}`;
// Admin login
export function register(req: Request, res: Response) {
  // TODO call service (DB handing)

  const errorObject: ErrorObject = checkEmptyFields(req.body);

  const { firstname, lastname, email, phone, conferenceid } = req.body;

  if (!validator.isEmail(email)) {
    errorObject.errorMessage += "Not valid email format";
  }
  if (!validator.isMobilePhone(phone)) {
    errorObject.errorMessage += "Not valid phone number format";
  }

  if (errorObject.errorMessage) {
    return res.status(400).send(errorObject);
  }

  // Generate URL with tocken
  // Send email with tocken

  res.sendStatus(200);
}

export const verifyBooking = (req, res) => {
  // Check valid token
  // mark bookin as verified
  res.sendStatus(200);
};

// TODO implement verifiaation route
