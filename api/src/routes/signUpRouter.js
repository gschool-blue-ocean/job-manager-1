import express from "express";
import { createStudent, createAdmin } from "../controllers/signUpController.js";
const router = express.Router();

router.post("/student", createStudent);
router.post("/admin", createAdmin);

export default router;
