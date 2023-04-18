import mongoose from "mongoose";
import { User } from "../types";

export type OrderDocument = mongoose.Document & User;

const userSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    idNumber: String,
    isPassport: Boolean,
    birthDate: String,
    phoneNumber: String,
    city: String,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model<OrderDocument>("User", userSchema);

export default UserModel;
