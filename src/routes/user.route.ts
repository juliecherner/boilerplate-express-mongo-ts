import express from "express";
import * as userController from "../controllers/user.controller";
const route = express.Router();

route.post("/user", userController.save);

export default route;
