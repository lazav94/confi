"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_model_1 = __importDefault(require("./booking.model"));
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () { return booking_model_1.default.find(); });
// .lean()
//  Admin should be able to list bookings
const getBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () { return booking_model_1.default.findById(id); });
// Admin should be able to delete a booking
const deleteBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () { return booking_model_1.default.findByIdAndDelete(id); });
const createBooking = (booking) => __awaiter(void 0, void 0, void 0, function* () {
    const newBooking = new booking_model_1.default(booking);
    return newBooking.save();
});
const updateBooking = (id, booking) => __awaiter(void 0, void 0, void 0, function* () { return booking_model_1.default.findByIdAndUpdate(id, booking); });
exports.default = {
    getAllBookings,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBookingById
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9ib29raW5nL2Jvb2tpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFvRDtBQUVwRCxNQUFNLGNBQWMsR0FBRyxHQUFtQyxFQUFFLGtEQUFDLE9BQUEsdUJBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQSxHQUFBLENBQUM7QUFDNUUsVUFBVTtBQUVWLHlDQUF5QztBQUN6QyxNQUFNLGNBQWMsR0FBRyxDQUFPLEVBQVUsRUFBNEIsRUFBRSxrREFDcEUsT0FBQSx1QkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFdkIsMkNBQTJDO0FBQzNDLE1BQU0saUJBQWlCLEdBQUcsQ0FBTyxFQUFVLEVBQTRCLEVBQUUsa0RBQ3ZFLE9BQUEsdUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFaEMsTUFBTSxhQUFhLEdBQUcsQ0FBTyxPQUFpQixFQUFxQixFQUFFO0lBQ25FLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN4QyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDLENBQUEsQ0FBQztBQUVGLE1BQU0sYUFBYSxHQUFHLENBQ3BCLEVBQVUsRUFDVixPQUFpQixFQUNTLEVBQUUsa0RBQUMsT0FBQSx1QkFBTyxDQUFDLGlCQUFpQixDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQSxHQUFBLENBQUM7QUFFdEUsa0JBQWU7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLGFBQWE7SUFDYixhQUFhO0lBQ2IsaUJBQWlCO0NBQ2xCLENBQUMifQ==