import { Router } from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
} from "./auth.controller";

import { protect } from "../../middleware/auth.middleware"

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected Route
router.get("/me", protect, getCurrentUser);

export default router;