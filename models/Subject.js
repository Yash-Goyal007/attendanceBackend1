import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Subject = mongoose.model("Subject", SubjectSchema);

export default Subject;
