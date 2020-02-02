import { Request, Response } from "express";
import bcrypt from "bcrypt";
// Admin login
export function login(req: Request, res: Response) {
  // TODO call service (DB handing)

  const { username, password } = req.body;
  // const criptedPassword = await bcrypt.decode(password);
  // Get user from db by username
  // compare passwords
  // 200 or not good
  res.sendStatus(200);
}

export function listBookings(req: Request, res: Response) {
  // get booking from db
  // send to frontend
}

export function deleteBooking(req: Request, res: Response) {
  // delete booking by req.body.id
}
