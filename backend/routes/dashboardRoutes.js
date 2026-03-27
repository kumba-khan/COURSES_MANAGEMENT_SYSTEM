import express from "express";

import { showDashboard } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, showDashboard);

export default router;