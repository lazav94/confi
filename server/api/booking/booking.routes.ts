import { Router } from "express";
import { haveAccess } from "../../services/middleware";
import {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBookingById,
  verifyBooking
} from "./booking.controller";

const router = Router();

router
  //  Admin should be able to list bookings
  .get("/list", haveAccess, getAllBookings)
  .get("/:id", haveAccess, getBookingById)
  // .put("/", haveAccess, createBooking)
  .post("/", haveAccess, updateBooking)
  // Admin should be able to delete a booking
  .delete("/:id", haveAccess, deleteBookingById)
  .get("/:token", verifyBooking);

export default router;
