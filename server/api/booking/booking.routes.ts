import { Router } from "express";
import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBookingById,
  verification
} from "./booking.controller";

const router = Router();

// TODO generate midleware to save session, only admin with the active session can list and delete booking

router
  .get("/list", getAllBookings)
  .get("/:id", getBookingById)
  .put("/", createBooking)
  .post("/", updateBooking)
  .delete("/:id", deleteBookingById)
  .get("/verification/:token", verification);

export default router;
