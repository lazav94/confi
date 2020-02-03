import { Router } from "express";
import { haveAccess } from "../../services/middleware";
import { getAllBookings, getBookingById, updateBooking, deleteBookingById, verifyBooking } from "./booking.controller";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL2Jvb2tpbmcvYm9va2luZy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUNMLGNBQWMsRUFDZCxjQUFjLEVBRWQsYUFBYSxFQUNiLGlCQUFpQixFQUNqQixhQUFhLEVBQ2QsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixNQUFNLE1BQU0sR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUV4QixNQUFNO0lBQ0oseUNBQXlDO0tBQ3hDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQztLQUN4QyxHQUFHLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUM7SUFDeEMsdUNBQXVDO0tBQ3RDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQztJQUNyQywyQ0FBMkM7S0FDMUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLENBQUM7S0FDN0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUVqQyxlQUFlLE1BQU0sQ0FBQyJ9