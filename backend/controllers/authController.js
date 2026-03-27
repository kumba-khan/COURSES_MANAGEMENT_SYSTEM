import bcrypt from "bcryptjs";
import User from "../models/User.js";

// Show login page
export const showLogin = (req, res) => {
  res.render("auth/login", {
    layout: false,
    title: "Login",
  });
};

//Handle login form submission
export const login = async (req, res) => {
  try{
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/auth/login");
    }
    //check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      req.flash("error", "Invalid email or password");
      return res.redirect("/auth/login");
    }

    // Set user session
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    req.flash("success", "Logged in successfully");
    res.redirect("/dashboard");
  }

  catch(error){
    console.error(error);
    req.flash("error", "An error occurred while logging in");
    res.redirect("/auth/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      req.flash("error", "An error occurred while logging out");
      return res.redirect("/dashboard");
    }
    res.clearCookie("connect.sid");
    req.flash("success", "Logged out successfully");
    res.redirect("/auth/login");
  });
};