import { IUser } from '../interfaces';
import UserModel from '../models/user.model';



// paradigma funcional
// const userModel = new UserModel();

// export const getAll = async (): Promise<IUser[]> => {
//   const users = await userModel.getAll();
//   return users;
// }

export class UserService {
  userModel = new UserModel();

  async getAll(): Promise<IUser[]> {
    const users = await this.userModel.getAll();
    return users;
  }
}