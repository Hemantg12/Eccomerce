import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    //name,email,profilepic,role,password
    name: {
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    profilePic: {
      type: String,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model("user", userSchema);
