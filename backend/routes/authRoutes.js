import express from "express";
import { showLogin, login, logout } from "../controllers/authController.js";
const router = express.Router();

//show Login page
router.get("/login", showLogin);

//Handle Login form submission
router.post("/login", login);

//logout
router.get("/logout", logout);

export default router;