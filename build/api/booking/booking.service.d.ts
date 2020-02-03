import { IBooking } from "./booking.model";
declare const _default: {
    getAllBookings: () => Promise<IBooking[]>;
    getBookingById: (id: string) => Promise<IBooking | null>;
    getBookingByToken: (token: string) => Promise<IBooking | null>;
    createBooking: (booking: IBooking) => Promise<IBooking>;
    updateBooking: (id: string, booking: IBooking) => Promise<IBooking | null>;
    deleteBookingById: (id: string) => Promise<IBooking | null>;
};
export default _default;
//# sourceMappingURL=booking.service.d.ts.map