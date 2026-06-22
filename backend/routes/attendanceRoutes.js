import express from 'express';
import { markAttendance, markAttendancePage, getAttendanceByCourse, attendanceOverview, getAttendanceByStudent } from '../controllers/attendanceController.js';

const router = express.Router();

// Mark attendance for a student in a course
router.post('/mark', markAttendance);

// Get the attendance marking page for a course
router.get('/mark/:courseId', markAttendancePage);

// Get attendance records for a specific course
router.get('/course/:courseId', getAttendanceByCourse);

// Get attendance overview for a course
router.get('/course/:courseId/overview', attendanceOverview);

// Get attendance records for a specific student
router.get('/student/:studentId', getAttendanceByStudent);

export default router;