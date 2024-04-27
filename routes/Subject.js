import express from "express";
import { fetchSubjects,createSubject } from "../controllers/Subject.js";

const router = express.Router();

router.post("/", fetchSubjects);
router.post("/add", createSubject);

export default router;