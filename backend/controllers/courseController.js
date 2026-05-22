import Course from '../models/Course.js';
import Student from '../models/Student.js';


// Show form to create a new course
export const showCreateCourseForm = (req, res) => {
    res.send("Show form to create a new course");
};

// Create a new course
export const createCourse = async (req, res) => {
  try {
    const { name, schedule, startDate, endDate } = req.body;
    const course = new Course({ name, schedule, startDate, endDate });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all courses
export const getAllCourses = async (req, res) => {
    try {}
    catch(error) {
    }
};

// Get course by ID
export const getCourseById = async (req, res) => {
    try {}
     catch(error) {
    }
};



// Update a course
export const updateCourse = async (req, res) => {
    try {}
     catch(error) {
    }
};

// Delete a course
export const deleteCourse = async (req, res) => {
    try {}
     catch(error) {
    }
};

// Enroll a student in a course
export const enrollStudent = async (req, res) => {
    try {}
     catch(error) {
    }
};

// List all students enrolled in a course
export const listEnrolledStudents = async (req, res) => {
    try {}
     catch(error) {
    }
};