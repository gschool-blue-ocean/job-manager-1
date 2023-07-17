import express from "express";
import { addStudentInfo } from "../controllers/studentInfoController.js";
const router = express.Router();

router.get("/", addStudentInfo);

export default router;
