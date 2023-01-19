import express  from "express";
import { login, register, home  } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post('/register',register)
authRouter.post('/login',login)
authRouter.post('/', home )

export default authRouter;