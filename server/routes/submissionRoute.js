import express from "express";
import {
  createSubmission,
  getSubmissionsByRoom,
  deleteSubmission,
} from "../controllers/submissionController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSubmission);
router.get("/:roomId", protect, getSubmissionsByRoom);
router.delete("/:id", protect, deleteSubmission);

export default router;
