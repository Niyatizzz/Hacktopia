import express from "express";
import {
  createCodeSession,
  getCodeSession,
  updateCodeSession,
  deleteCodeSession, // Optional
} from "../controllers/codeController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new code session
router.post("/", protect, createCodeSession);

// Get a code session by roomId
router.get("/:roomId", protect, getCodeSession);

// Update a code session by roomId
router.put("/:roomId", protect, updateCodeSession);

// (Optional) Delete a code session by roomId
router.delete("/:roomId", protect, deleteCodeSession);

export default router;
