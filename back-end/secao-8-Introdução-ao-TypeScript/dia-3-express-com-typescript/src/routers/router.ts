import { Router } from "express";
import loginRouter from "./login.router";
import userRouter from './users.router';

import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.use('/users', authMiddleware, userRouter);
router.use('/login', loginRouter);

export default router;