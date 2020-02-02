import mongoose, { Document } from "mongoose";
export interface IBooking extends Document {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    token?: string;
    verified: boolean;
}
declare const _default: mongoose.Model<IBooking, {}>;
export default _default;
//# sourceMappingURL=booking.model.d.ts.map