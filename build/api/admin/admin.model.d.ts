import mongoose, { Document } from "mongoose";
export interface IAdmin extends Document {
    username: string;
    password: string;
}
declare const _default: mongoose.Model<IAdmin, {}>;
export default _default;
//# sourceMappingURL=admin.model.d.ts.map