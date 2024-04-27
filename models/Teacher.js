import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema(
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
    department: String,
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", TeacherSchema);

export default Teacher;
