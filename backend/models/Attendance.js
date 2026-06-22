import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
    {
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
        date : {
            type: Date,
            required: true,
        },
        records: [
            {
                student: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student",
                    required: true,
                },
                status: {
                    type: String,
                    enum: ["present", "absent", "late", "excused"],
                    required: true,
                },
            }
        ]

        
    },
    { timestamps: true }
);
export default mongoose.model("Attendance", attendanceSchema);