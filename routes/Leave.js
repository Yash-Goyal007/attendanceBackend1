import express from "express";
import { applyLeave, leaveRequests, findLeave } from "../controllers/Leave.js";

const router = express.Router();

router.post("/apply", applyLeave);
router.get("/requests", leaveRequests);
router.post("/find", findLeave);

export default router;
