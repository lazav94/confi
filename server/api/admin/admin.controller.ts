import { Request, Response } from "express";
import { compare } from "bcrypt";
import adminService from "./admin.service";
import { IAdmin } from "./admin.model";

const saltRounds = parseInt(process.env.SALT_ROUNDS || "9", 10);
// Admin login
export async function login(req: Request, res: Response) {
  // TODO call service (DB handing)

  const { username, password } = req.body;

  const admin: IAdmin | null = await adminService.getAdminByUsername(username);
  if (admin) {
    res.sendStatus(200);
    const match = await compare(password, admin.password);
    if (match) {
      // Login
      return res.send(200);
    }
    return res
      .send({ error: true, errorMessage: "Wrong password" })
      .status(400);
  }
  res.send({ error: true, errorMessage: "No matching user " });
}

export function listBookings(req: Request, res: Response) {
  // get booking from db
  // send to frontend
}

export function deleteBooking(req: Request, res: Response) {
  // delete booking by req.body.id
}
