import express from "express";
import cors from "cors";
import userRouter from "../routes/userRouter.js";
import cohortRouter from "../routes/cohortRouter.js";
import filesRouter from "../routes/filesRouter.js";
import signUpRouter from "../routes/signUpRouter.js";
import studentInfoRouter from "../routes/studentInfoRouter.js";
import { hashPasswordMiddleware } from "../utils/auth.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))

app.use("/api/signup", hashPasswordMiddleware, signUpRouter);
app.use("/api/users", userRouter);
app.use("/api/student-info", studentInfoRouter);
app.use("/api/cohort", cohortRouter);
app.use("/api/files", filesRouter);

export default app;
