import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema(
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
    date: {
      type: Date,
      required: true,
    },
    students: [
      {
        student_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },
        status: {
          type: String,
          default: "Absent",
          enum: ["Present", "Absent"],
        },
      },
    ],
  },
  { timestamps: true }
);

AttendanceSchema.index(
  { year: 1, branch: 1, subject: 1, date: 1 },
  { unique: true }
);

const Attendance = mongoose.model("Attendance", AttendanceSchema);

export default Attendance;
