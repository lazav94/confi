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
import uuid from "uuid";
import sendEmail from "../../services/mailer";
import { generateVerificationEmail } from "../../services/utils";
import conferenceService from "../conference/conference.service";
export const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield BookingService.getAllBookings();
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
    const { firstname, lastname, email, phone } = fields;
    let errorMessage = "";
    if (!firstname) {
        errorMessage += "Please enter your first name";
    }
    if (!lastname) {
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
// Admin login
export function register(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const errorObject = checkEmptyFields(req.body);
        const { email, phone, conferenceid } = req.body;
        if (!conferenceid) {
            return res.status(500).send({
                error: true,
                errorMessage: "Something wrong with request, conference id not sent"
            });
        }
        if (!validator.isEmail(email)) {
            errorObject.errorMessage += "Not valid email format";
        }
        if (!validator.isMobilePhone(phone)) {
            errorObject.errorMessage += "Not valid phone number format";
        }
        if (errorObject.errorMessage) {
            return res.status(400).send(errorObject);
        }
        const conference = yield conferenceService.getConferenceById(conferenceid);
        if (!conference) {
            return res.status(404).send({
                error: true,
                errorMessage: "Something wrong, conference not found"
            });
        }
        // Generate token - can use JWT or hashing for more secure approach
        const token = uuid();
        const mailOptions = {
            from: "Confi",
            to: email,
            subject: "Verification Email",
            html: generateVerificationEmail(token)
        };
        // Sending email
        yield sendEmail(mailOptions);
        // Create new booking with token and flag verified set to false
        yield BookingService.createBooking(Object.assign(Object.assign({}, req.body), { token }));
        res.sendStatus(200);
    });
}
export const verification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    if (!token) {
        return res.send({ error: true, errorMessage: "Invalid token" });
    }
    const booking = yield BookingService.getBookingByToken(token);
    if (!booking) {
        return res.send({ error: true, errorMessage: "Invalid token" });
    }
    booking.verified = true;
    yield booking.save();
    res.sendStatus(200);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9ib29raW5nL2Jvb2tpbmcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMsT0FBTyxTQUFTLE1BQU0sV0FBVyxDQUFDO0FBS2xDLE9BQU8sY0FBYyxNQUFNLG1CQUFtQixDQUFDO0FBRS9DLE9BQU8sSUFBSSxNQUFNLE1BQU0sQ0FBQztBQUN4QixPQUFPLFNBQVMsTUFBTSx1QkFBdUIsQ0FBQztBQUk5QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRSxPQUFPLGlCQUFpQixNQUFNLGtDQUFrQyxDQUFDO0FBRWpFLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xFO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFvQixNQUFNLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRSxD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