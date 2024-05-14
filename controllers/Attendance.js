import Attendance from "../models/Attendance.js";
import Student from "../models/Student.js";

export const fetchStudents = async (req, res) => {
  const data = req.body;
  try {
    const students = await Student.find(data);
    if (students) res.status(200).json({ students });
    else res.status(500).json({ message: "Students not found" });
  } catch (err) {
    res.status(500).json({ message: "Students not found" });
  }
};

export const createAttendance = async (req, res) => {
  const data = req.body;
  try {
    const createdAttendance = await Attendance.create(data);
    if (createdAttendance)
      res.status(201).json({ attendance: createdAttendance });
    else res.status(500).json({ message: "Attendance not created" });
  } catch (err) {
    res.status(500).json({ message: "Attendance not created" });
  }
};

export const fetchAttendance = async (req, res) => {
  const data = req.body;
  try {
    const attendance = await Attendance.findOne(data);
    if (attendance) res.status(200).json({ attendance });
    else res.status(500).json({ message: "Attendance not found" });
  } catch (err) {
    res.status(500).json({ message: "Attendance not found" });
  }
};

export const fetchMonthlyReport = async (req, res) => {
  const data = req.body;
  const { year, branch, subject } = data;
  try {
    const report = await Attendance.find({ year, branch, subject });
    console.log(report);
    if (report) res.status(200).json({ report });
    else res.status(500).json({ message: "Report not found" });
  } catch (err) {
    res.status(500).json({ message: "Report not found" });
  }
};
