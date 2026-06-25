import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["admin", "student"],
      default: "student",
      required: true
    },

    phone: {
      type: String,
      required: function () {
        return this.role === "student";
      }
    },

    status: {
      type: String,
      enum: ["active", "inactive", "graduated"],
      required: function () {
        return this.role === "student";
      },
      default: "active"
    },

    enrolledDate: {
      type: Date,
      required: function () {
        return this.role === "student";
      },
      default: Date.now
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);