import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

const usersController = new UserController();

// solução 1 - Mudar o método para ser do tipo arrow function no arquivo do controller
// userRouter.get('/', usersController.getAll);
// solução 2 - Método
// userRouter.get('/', usersController.getAll.bind(usersController));
// solução 3- Manter como Método e abrir um middleware e chamar como uma funcão!
userRouter.get('/', (req, res) => usersController.getAll(req, res));

export default userRouter;