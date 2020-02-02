import Booking, { IBooking } from "./booking.model";

const getAllBookings = async (): Promise<Array<IBooking>> => Booking.find();
// .lean()

//  Admin should be able to list bookings
const getBookingById = async (id: string): Promise<IBooking | null> =>
  Booking.findById(id);

// Admin should be able to delete a booking
const deleteBookingById = async (id: string): Promise<IBooking | null> =>
  Booking.findByIdAndDelete(id);

const createBooking = async (booking: IBooking): Promise<IBooking> => {
  const newBooking = new Booking(booking);
  return newBooking.save();
};

const updateBooking = async (
  id: string,
  booking: IBooking
): Promise<IBooking | null> => Booking.findByIdAndUpdate(id, booking);

export default {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBookingById
};
