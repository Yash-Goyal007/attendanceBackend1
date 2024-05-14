import express from "express";
import { registerTeacher, registerStudent, loginUser, findStudent } from "../controllers/Authenticate.js";

const router = express.Router();

router.post("/register/teacher", registerTeacher);
router.post("/register/student", registerStudent);
router.post("/login", loginUser);
router.post("/find/student", findStudent)

export default router;