import express from "express";
import {
  getAllStudents,
  createStudent,
  getStudentById,
  updateStudent,
  deleteStudent,
  studentStatistic,
  getActiveStudents
} from "../controllers/studentController.js";
import { authorize, authorizeAdminAndParticularStudent } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authorize("admin"),getAllStudents);
router.get("/active", authorize("admin"),getActiveStudents);
router.get("/stats", studentStatistic);
router.get("/:id",authorizeAdminAndParticularStudent, getStudentById);
router.post("/", authorize("admin"), createStudent);
router.put("/:id", authorize("admin"), updateStudent);
router.delete("/:id",authorize("admin"), deleteStudent);

export default router;