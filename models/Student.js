import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    rollNo: String,
    year: String,
    branch: String,
    parentsContact: String,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;
