import express from "express";

import {
    getAllCourses,
    createCourse,
    getCourseById,
    updateCourse,
    deleteCourse,
    enrollStudent,
    removeStudent
} from "../controllers/courseController.js";

const router = express.Router();

router.get("/", getAllCourses);
router.post("/", createCourse);
router.post("/:id/enroll", enrollStudent);
router.delete("/:id/:studentId", removeStudent);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);
router.get("/:id", getCourseById);
export default router;