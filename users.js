import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: { type: String, required: true },
  items: { type: Array, default: [] }
}, {
  collection: "users"
});

export default mongoose.model("User", UserSchema);
