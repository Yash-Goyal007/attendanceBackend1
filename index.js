import express from "express";
import mongoose from "mongoose";
import authenticateRoutes from "./routes/Authenticate.js";
import subjectRoutes from "./routes/Subject.js";
import attendanceRoutes from "./routes/Attendance.js";
import cors from "cors";

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/auth", authenticateRoutes);
app.use("/subject", subjectRoutes);
app.use("/attendance", attendanceRoutes);

//Server and Database Connection
mongoose
  .connect(
    "mongodb+srv://yashgoyalmrt1912:YashGoyal@cluster0.indpxc7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(8800, () => console.log(`Server listening on Port ${8800}`));
  })
  .catch((error) => console.log(error));
