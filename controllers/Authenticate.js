import Teacher from "../models/Teacher.js";
import Student from "../models/Student.js";

const registerTeacher = async (req, res) => {
  const user = req.body;
  try {
    const createdUser = await Teacher.create(user);
    if (createdUser) res.status(201).json({ user: createdUser });
    else res.status(500).json({ message: "User not created" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "User not created" });
  }
};

const registerStudent = async (req, res) => {
  const user = req.body;
  try {
    const createdUser = await Student.create(user);
    if (createdUser) res.status(201).json({ user: createdUser });
    else res.status(500).json({ message: "User not created" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "User not created" });
  }
};

const loginUser = async (req, res) => {
  const user = req.body;
  try {
    const foundTeacher = await Teacher.findOne(user);
    const foundStudent = await Student.findOne(user);
    if (foundStudent) res.status(201).json({ foundStudent });
    else if (foundTeacher) {
      res.status(201).json({ foundTeacher });
    } else {
      res.status(500).json({ message: "User not found" });
    }
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "User not found" });
  }
};

export { registerTeacher, registerStudent, loginUser };
