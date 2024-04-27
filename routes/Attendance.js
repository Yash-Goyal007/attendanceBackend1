import express from "express";
import {
  createAttendance,
  fetchStudents,
  fetchAttendance,
  fetchMonthlyReport,
} from "../controllers/Attendance.js";

const router = express.Router();

router.post("/students", fetchStudents);
router.post("/", createAttendance);
router.post("/fetch", fetchAttendance);
router.post("/monthly", fetchMonthlyReport);

export default router;
