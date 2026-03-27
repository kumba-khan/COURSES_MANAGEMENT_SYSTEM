import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config({ path: "../.env" });

const createRoles = async () => {
    try{
        // Connect to the database using your existing function
        await connectDB();

        console.log("Adding Users...");

        // Clear existing users
        await User.deleteMany({});

        const users = [
            {
                username: "Admin",
                email: "kumbizzko@gmail.com",
                password: await bcrypt.hash("admin123", 10),
            },

            {
                username: "Student",
                email: "momodou@gmail.com",
                password: await bcrypt.hash("student123", 10),
            }
        ];

        // Insert the new users
        await User.insertMany(users);
        console.log("Users added successfully✅.");
        process.exit(0);
    }
    catch(error){
        console.error("Error creating roles:", error);
        process.exit(1);
    }
};
createRoles();