import Subject from "../models/Subject.js";

export const fetchSubjects = async (req, res) => {
  const credentials = req.body;
  try {
    const subjects = await Subject.find(credentials);
    if (subjects) res.status(200).json({ subjects });
    else res.status(500).json({ message: "Subjects not found" });
  } catch (err) {
    res.status(500).json({ message: "Subjects not found" });
  }
};

export const createSubject = async (req, res) => {
  const subject = req.body;
  try {
    const createdSubject = await Subject.create(subject);
    if (createdSubject) res.status(201).json({ subject: createdSubject });
    else res.status(500).json({ message: "Subject not created" });
  } catch (err) {
    res.status(500).json({ message: "Subject not created" });
  }
};
