import {registerUser } from './auth.controller'
import {Router} from "express"

const router = Router();

router.post("/register", registerUser);

export default router;