import { Router } from "express";
import { protect } from "../../middleware/auth.middleware"
import {createGroupController, getMyGroupsController} from "../group/group.controller"

const router = Router();

router.post("/create",protect, createGroupController);
router.get("/getGroups",protect, getMyGroupsController);
export default router;