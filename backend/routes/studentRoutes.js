import express from "express";
import {
  getAllStudents,
  createStudent,
  showCreateStudentForm,
  getStudentById,
  showeditStudentForm,
  updateStudent,
  showreportStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect,  getAllStudents);
router.get("/create", protect, showCreateStudentForm);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.get("/:id/edit", showeditStudentForm);
router.put("/:id", updateStudent);
router.get("/:id/report", showreportStudent);
router.delete("/:id", deleteStudent);

export default router;