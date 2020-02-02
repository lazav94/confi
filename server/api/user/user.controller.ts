import { Request, Response } from "express";
// TODO maybe use jwt instead or custome algorithm for hasing
import bcrypt from "bcrypt";
// TODO use custome solution instead validator
import validator from "validator";

import UserRegisterBody from "../../models/userRegisterBody.model";
import ErrorObject from "../../models/error.model";

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

// Admin login
export function register(req: Request, res: Response) {
  // TODO call service (DB handing)

  const errorObject: ErrorObject = checkEmptyFields(req.body);

  const { firstName, lastName, email, phone } = req.body;

  if (!validator.isEmail(email)) {
    errorObject.errorMessage += "Not valid email format";
  }
  if (!validator.isMobilePhone(phone)) {
    errorObject.errorMessage += "Not valid phone number format";
  }

  if (errorObject.errorMessage) {
    return res.status(400).send(errorObject);
  }

  // const criptedPassword = await bcrypt.decode(password);

  // Get user from db by username
  // compare passwords
  // 200 or not good
  res.sendStatus(200);
}
