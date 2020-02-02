import mongoose, { Schema } from "mongoose";

const UserSchema: Schema = new Schema({
  // Can be admin on anonimus user
  isAdmin: {
    type: Boolean,
    default: false
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  },
  token: {
    type: String
  }
});

export default mongoose.model("User", UserSchema);
