import UserModel from "../models/user.model";
import { User } from "../types";

export const save = async (order: User): Promise<any> => {
  const newOrder = (await UserModel.create(order)).save();
  if (!newOrder) throw new Error("Not created");
  return newOrder;
};
