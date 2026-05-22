import Student from "../models/Student.js";

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().lean().sort({ createdAt: -1 });
    res.render("students/listStudents", { students});
  } catch (error) {
    console.error(error);
    req.flash("error", "An error occurred while fetching students");
    res.redirect("/dashboard");
  }
};
// Show form to create a new student
export const showCreateStudentForm = async (req, res) => {
  res.render("students/createStudent");
  // try{}
  // catch(error){}
}

// Create a new student
export const createStudent = async (req, res) => {
  try {
    const { name, email, phone, status, enrolledDate } = req.body;
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      req.flash("error", "A student with this email already exists");
      return res.redirect("/students");
    }
    await Student.create({ name, email, phone, status, enrolledDate: new Date() });
    req.flash("success", "Student created successfully");
    res.redirect("/students");
    console.log("Student created successfully");
  } catch (error) {
    console.error(error);
    req.flash("error", "An error occurred while creating the student");
    res.redirect("/students/listStudents");
  }
};

// Get student by ID
 export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate().lean();
    if (!student) {
      req.flash("error", "Student not found");
      return res.redirect("/students");
    }
    res.render("students/showStudent", { student, title: "Student Details" });
  } catch (error) {
    console.error(error);
    req.flash("error", "An error occurred while fetching the student");
    res.redirect("/students");
  }
 };


export const showeditStudentForm = async (req, res) => {
    try{
      const student = await Student.findById(req.params.id).lean();
      if (!student) {
        req.flash("error", "Student not found");
        return res.redirect("/students");
      }
      res.render("students/edit", { student });
    } catch (error) {}
};

export const updateStudent = async (req, res) => {
    try{
      const { name, email, phone, status, enrolledDate } = req.body;
      const student = await Student.findById(req.params.id);
      if (!student) {
        req.flash("error", "Student not found");
        return res.redirect("/students");
      }
      student.name = name;
      student.email = email;
      student.phone = phone;
      student.status = status;
      student.enrolledDate = enrolledDate ? new Date(enrolledDate) : student.enrolledDate;
      await student.save();
      req.flash("success", "Student updated successfully");
      res.redirect("/students");
      
    } catch (error) {}
};

export const showreportStudent = async (req, res) => {
    try{} catch (error) {}
};

export const deleteStudent = async (req, res) => {
    try{
      await Student.findByIdAndDelete(req.params.id);
      req.flash("success", "Student deleted successfully");
      res.redirect("/students");
    } catch (error) {
      console.error(error);
      req.flash("error", "An error occurred while deleting the student");
      res.redirect("/students");
    }
};