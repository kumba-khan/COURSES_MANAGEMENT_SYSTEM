import Course from '../models/Course.js';
import Student from '../models/Student.js';
import Attendance from '../models/Attendance.js';

// Get the attendance marking page for a course
export const markAttendancePage = async (req, res) => {
   res.render('attendance/showMarkAttendancePage');
};
//, { courseId: req.params.courseId }
// Mark attendance for a student in a course
export const markAttendance = async (req, res) => {
    try {
    } catch (error) {
    }
};



// Get attendance records for a specific course
export const getAttendanceByCourse = async (req, res) => {
    try {
    } catch (error) {
    }
};

// Get attendance overview for a course
export const attendanceOverview = async (req, res) => {
    try {
    } catch (error) {
    }
};

// Get attendance records for a specific student
export const getAttendanceByStudent = async (req, res) => {
    try {
    } catch (error) {
    }
};