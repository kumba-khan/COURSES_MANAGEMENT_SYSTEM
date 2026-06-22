import express from "express";
import { login, logout } from "../controllers/authController.js";
const router = express.Router();

//Handle Login form submission
router.post("/login", login);

//logout
router.get("/logout", logout);

export default router;