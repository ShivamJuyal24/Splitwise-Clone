import { Router } from "express";
import { protect } from "../../middleware/auth.middleware"
import {createGroupController} from "../group/group.controller"

const router = Router();

router.post("/create",protect, createGroupController);

export default router;