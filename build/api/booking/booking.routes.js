"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const router = express_1.Router();
// TODO generate midleware to save session, only admin with the active session can list and delete booking
router
    .get("/list", booking_controller_1.getAllBookings)
    .get("/:id", booking_controller_1.getBookingById)
    .put("/", booking_controller_1.createBooking)
    .post("/", booking_controller_1.updateBooking)
    .delete("/:id", booking_controller_1.deleteBookingById)
    .get("/verification/:token", booking_controller_1.verification);
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zZXJ2ZXIvYXBpL2Jvb2tpbmcvYm9va2luZy5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsNkRBTzhCO0FBRTlCLE1BQU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztBQUV4QiwwR0FBMEc7QUFFMUcsTUFBTTtLQUNILEdBQUcsQ0FBQyxPQUFPLEVBQUUsbUNBQWMsQ0FBQztLQUM1QixHQUFHLENBQUMsTUFBTSxFQUFFLG1DQUFjLENBQUM7S0FDM0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxrQ0FBYSxDQUFDO0tBQ3ZCLElBQUksQ0FBQyxHQUFHLEVBQUUsa0NBQWEsQ0FBQztLQUN4QixNQUFNLENBQUMsTUFBTSxFQUFFLHNDQUFpQixDQUFDO0tBQ2pDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxpQ0FBWSxDQUFDLENBQUM7QUFFN0Msa0JBQWUsTUFBTSxDQUFDIn0=