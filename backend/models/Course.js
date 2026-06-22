import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },

  schedule: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },

  students: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
  ],
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

export default Course;

