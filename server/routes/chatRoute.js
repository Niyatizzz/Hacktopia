import express from "express";
import {
  createRoom,
  deleteRoom,
  sendMessage,
  getMessages,
} from "../controllers/chatController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/room", protect, createRoom);
router.delete("/room/:roomId", protect, deleteRoom);
router.post("/message", protect, sendMessage);
router.get("/messages/:roomId", protect, getMessages);

export default router;
