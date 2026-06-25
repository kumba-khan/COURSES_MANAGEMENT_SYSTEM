import express from "express";

import {
    getAllCourses,
    createCourse,
    getCourseById,
    updateCourse,
    deleteCourse,
    enrollStudent,
    unenrollStudent,
    getCourseStats
} from "../controllers/courseController.js";
import { authorize, authorizeAdminAndParticularStudent } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/stats", getCourseStats);
router.post("/",authorize("admin"), createCourse);
router.post("/:id/enroll",authorizeAdminAndParticularStudent, enrollStudent);
router.delete("/:id/:studentId", authorizeAdminAndParticularStudent, unenrollStudent);//we have to work on this one
router.put("/:id", authorize("admin"),updateCourse);
router.delete("/:id",authorize("admin"), deleteCourse);
router.get("/:id", getCourseById);
export default router;