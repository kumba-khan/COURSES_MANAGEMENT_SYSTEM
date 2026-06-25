import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/User.js";
import connectDB from "./config/db.js";

dotenv.config({ path: ".env" });

const createRoles = async () => {
    try{
        // Connect to the database using your existing functionfish
        await connectDB();

        console.log("Adding Users...");

        // Clear existing users
        await User.deleteMany({});

        const users = [
            {
                name: "Kumba Khan",
                email: "kumba@gmail.com",
                password: await bcrypt.hash("admin123", 10),
                role: "admin"
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