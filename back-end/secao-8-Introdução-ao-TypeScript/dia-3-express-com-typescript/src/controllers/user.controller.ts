import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export default class UserController {
  userService = new UserService();

 async getAll(req: Request, res: Response) {
    console.log(this);
    const users = await this.userService.getAll();
    res.status(200).json(users);
  }
}