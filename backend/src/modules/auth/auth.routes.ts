import {registerUser , loginUser} from './auth.controller'
import {Router} from "express"

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
export default router;