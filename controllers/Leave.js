import Leave from "../models/Leave.js";
// import { ObjectId } from "bson";
import { ObjectId } from "mongodb";

export const applyLeave = async (req, res) => {
  const leave = req.body;
  try {
    const createdLeave = await Leave.create(leave);
    if (createdLeave) res.status(201).json({ leave: createdLeave });
    else res.status(500).json({ message: "Leave not applied" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "Leave not applied" });
  }
};

export const leaveRequests = async (req, res) => {
  try {
    const leaves = await Leave.find({ status: "Pending" });
    if (leaves) res.status(200).json({ leaves });
    else res.status(500).json({ message: "Leaves not found" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "Leaves not found" });
  }
};

export const findLeave = async (req, res) => {
  const data = req.body;
  const { student_id, date } = data;
  const bytes = new ObjectId(student_id);
  // const objectId = new ObjectID();
  // console.log(objectId.isValid(student_id));
  console.log(bytes);
  try {
    const foundLeave = await Leave.findOne({ student_id: bytes, date: date });
    if (foundLeave) console.log(foundLeave);
    if (foundLeave) res.status(200).json({ foundLeave });
    else res.status(500).json({ message: "Leave not found" });
  } catch (error) {
    if (error) throw error;
    res.status(500).json({ message: "Leave not found" });
  }
};
