import express from "express";

import {
    getAllCourses,
    getCourseById,
    showCreateCourseForm,
    createCourse,
    updateCourse,
    deleteCourse,
    enrollStudent,
    listEnrolledStudents,
} from "../controllers/courseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllCourses);
router.get("/create", protect, showCreateCourseForm);
router.post("/", createCourse);
router.get("/:id", getCourseById);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);
router.post("/:id/enroll", enrollStudent);
router.get("/:id/students", listEnrolledStudents);

export default router;