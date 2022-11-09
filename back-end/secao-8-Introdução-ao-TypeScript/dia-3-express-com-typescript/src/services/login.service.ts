import { ILogin, IUser } from "../interfaces";
import Joi from 'joi';
import * as jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import HttpException from "../shared/http.exception";

export default class LoginService {
  userModel = new UserModel();


  validateBody(params: ILogin): ILogin {
    const schema = Joi.object<ILogin>({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);
    
    if (error) {
      throw error;
    }

    return value;
  }

  async createToken(login: ILogin) {
    // validar se existe no banco
    const user = await this.userModel.findByEmail(login.email);

    console.log(user);

    if (!user || user.password !== login.password) {
      throw new HttpException(401, 'Usuário não encontrado');
    }

    // se existir criar o token
    const token = jwt.sign({ email: user.email, password: user.password}, process.env.JWT_SECRET as string);

    return token;
  }
}