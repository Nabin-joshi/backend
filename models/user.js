import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, requird: true },
  password: { type: String, requird: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
