import { Request, Response } from "express";
import LoginService from "../services/login.service";

export default class LoginController {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const user = this.loginService.validateBody(req.body);

    const token = await this.loginService.createToken(user);

    res.status(201).json(token);
  }
}