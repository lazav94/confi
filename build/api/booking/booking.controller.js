var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// TODO use custome solution instead validator
import validator from "validator";
import BookingService from "./booking.service";
import bookingService from "./booking.service";
export const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield bookingService.getAllBookings();
        res.send(bookings).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const getBookingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield BookingService.getBookingById(id);
        return res.send(booking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
// TODO don't expose this
// TODO change how to call it (not API)
export const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBooking = yield BookingService.createBooking(req.body);
        res.send(newBooking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield BookingService.updateBooking(id, req.body);
        res.send(booking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
export const deleteBookingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedBooking = yield BookingService.deleteBookingById(id);
        res.send(deletedBooking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
const checkEmptyFields = (fields) => {
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
const generateURL = () => `${req.host}/booking/${uuid}`;
// Admin login
export function register(req, res) {
    // TODO call service (DB handing)
    const errorObject = checkEmptyFields(req.body);
    const { firstname, lastname, email, phone, conferenceid } = req.body;
    if (!validator.isEmail(email)) {
        errorObject.errorMessage += "Not valid email format";
    }
    if (!validator.isMobilePhone(phone)) {
        errorObject.errorMessage += "Not valid phone number format";
    }
    if (errorObject.errorMessage) {
        return res.status(400).send(errorObject);
    }
    // Generate URL with tocken
    // Send email with tocken
    res.sendStatus(200);
}
export const verifyBooking = (req, res) => {
    // Check valid token
    // mark bookin as verified
    res.sendStatus(200);
};
// TODO implement verifiaation route
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9ib29raW5nL2Jvb2tpbmcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBS2xDLE9BQU8sY0FBYyxNQUFNLG1CQUFtQixDQUFDO0FBSy9DLE9BQU8sY0FBYyxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xFO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFvQixNQUFNLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN0QztJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2Qs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