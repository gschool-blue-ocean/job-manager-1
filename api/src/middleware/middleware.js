import express from "express";
import cors from "cors";
import userRouter from "../routes/userRouter.js";
import cohortRouter from "../routes/cohortRouter.js";
import filesRouter from "../routes/filesRouter.js";
import signUpRouter from "../routes/signUpRouter.js";
import studentInfoRouter from "../routes/studentInfoRouter.js";
import { hashPasswordMiddleware } from "../utils/auth.js";
import loginRouter from "../routes/loginRouter.js";
import jwt from "jsonwebtoken";
import { sql } from "../server.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))

app.use("/api/signup", hashPasswordMiddleware, signUpRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/student-info", studentInfoRouter);
app.use("/api/cohort", cohortRouter);
app.use("/api/files", filesRouter);

//FUNCTION USED TO MATCH CURENT USER TO A USER ID ON THE DB FOR POST REQUEST FROM THE STUDENT HOME PAGE
export const authMiddleware = async (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }
  
      const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
  
      const user = await
        sql`
          SELECT id
          FROM users
          WHERE id = ${decodedToken.id}
        `
      console.log(user)
      console.log(decodedToken)
      if (!user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
  
      req.userId = user[0].id; // Add userId to the request object
      next();
    } catch (error) {
      console.error("Error in authentication middleware:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

export default app;
