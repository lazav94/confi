import mongoose, { Document } from "mongoose";
export interface IConference extends Document {
    name: String;
    date: Date;
}
declare const _default: mongoose.Model<IConference, {}>;
export default _default;
//# sourceMappingURL=conference.model.d.ts.map