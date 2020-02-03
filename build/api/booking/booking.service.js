var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Booking from "./booking.model";
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () { return Booking.find(); });
// .lean()
const getBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () { return Booking.findById(id); });
// Admin should be able to delete a booking
const deleteBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () { return Booking.findByIdAndDelete(id); });
const createBooking = (booking) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = new Booking(booking);
    return newBooking.save();
});
const updateBooking = (id, booking) => __awaiter(void 0, void 0, void 0, function* () { return Booking.findByIdAndUpdate(id, booking); });
export default {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBookingById
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9ib29raW5nL2Jvb2tpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLE9BQXFCLE1BQU0saUJBQWlCLENBQUM7QUFFcEQsTUFBTSxjQUFjLEdBQUcsR0FBbUMsRUFBRSxrREFBQyxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQSxHQUFBLENBQUM7QUFDNUUsVUFBVTtBQUVWLE1BQU0sY0FBYyxHQUFHLENBQU8sRUFBVSxFQUE0QixFQUFFLGtEQUNwRSxPQUFBLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUEsR0FBQSxDQUFDO0FBRXZCLDJDQUEyQztBQUMzQyxNQUFNLGlCQUFpQixHQUFHLENBQU8sRUFBVSxFQUE0QixFQUFFLGtEQUN2RSxPQUFBLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFaEMsTUFBTSxhQUFhLEdBQUcsQ0FBTyxPQUFpQixFQUFxQixFQUFFO0lBQ25FLE1BQU0sVUFBVSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQSxDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FDcEIsRUFBVSxFQUNWLE9BQWlCLEVBQ1MsRUFBRSxrREFBQyxPQUFBLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUEsR0FBQSxDQUFDO0FBRXRFLGVBQWU7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ2xCLENBQUMifQ==