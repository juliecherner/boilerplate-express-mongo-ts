import { Request, Response } from "express";
import * as userService from "../services/user.service";

export const save = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const newUser = await userService.save(user);
    res.status(200).send(newUser);
  } catch (error: any) {
    res.status(500).send();
  }
};
