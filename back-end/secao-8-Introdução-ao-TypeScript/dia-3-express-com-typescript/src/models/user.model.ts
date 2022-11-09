import mysql from "./connection";

import { ILogin, IUser } from '../interfaces';
import { RowDataPacket } from "mysql2";

// forma funcional
// export const getAll = async (): Promise<IUser[]> => {
//   const [rows] = await connection.execute<IUser[] & RowDataPacket[]>('SELECT * FROM users');
  
//   return rows;
// }

// Classes
export default class UserModel {
  connection = mysql;

  async getAll(): Promise<IUser[]> {
    const [rows] = await this.connection.execute<IUser[] & RowDataPacket[]>('SELECT * FROM users');
    
    return rows;
  }

  async findByEmail(email: string): Promise<ILogin> {
    const sql = 'SELECT * FROM users WHERE email=?';

    const [[row]] = await this.connection.execute<ILogin[] & RowDataPacket[]>(sql, [email]);
    return row;
  }
}

