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
const booking_service_1 = __importDefault(require("./booking.service"));
// TODO use custome solution instead validator
const validator_1 = __importDefault(require("validator"));
const booking_service_2 = __importDefault(require("./booking.service"));
exports.getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield booking_service_2.default.getAllBookings();
        res.send(bookings).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.getBookingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield booking_service_1.default.getBookingById(id);
        return res.send(booking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBooking = yield booking_service_1.default.createBooking(req.body);
        res.send(newBooking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.updateBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield booking_service_1.default.updateBooking(id, req.body);
        res.send(booking).status(200);
    }
    catch (error) {
        return res.send({ error: true, errorObject: error }).status(400);
    }
});
exports.deleteBookingById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedBooking = yield booking_service_1.default.deleteBookingById(id);
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
// Admin login
function register(req, res) {
    // TODO call service (DB handing)
    const errorObject = checkEmptyFields(req.body);
    const { firstName, lastName, email, phone } = req.body;
    if (!validator_1.default.isEmail(email)) {
        errorObject.errorMessage += "Not valid email format";
    }
    if (!validator_1.default.isMobilePhone(phone)) {
        errorObject.errorMessage += "Not valid phone number format";
    }
    if (errorObject.errorMessage) {
        return res.status(400).send(errorObject);
    }
    // const criptedPassword = await bcrypt.decode(password);
    // Get user from db by username
    // compare passwords
    // 200 or not good
    res.sendStatus(200);
}
exports.register = register;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va2luZy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc2VydmVyL2FwaS9ib29raW5nL2Jvb2tpbmcuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVBLHdFQUErQztBQUkvQyw4Q0FBOEM7QUFDOUMsMERBQWtDO0FBSWxDLHdFQUErQztBQUVsQyxRQUFBLGNBQWMsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUNsRSxJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSx5QkFBYyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNsRTtBQUNILENBQUMsQ0FBQSxDQUFDO0FBRVcsUUFBQSxjQUFjLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEUsSUFBSTtRQUNGLE1BQU0sRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzFCLE1BQU0sT0FBTyxHQUFvQixNQUFNLHlCQUFjLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdEM7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxD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