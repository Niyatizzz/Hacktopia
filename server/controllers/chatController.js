import ChatRoom from "../models/Room.js";
import Message from "../models/Message.js";

// Create Room
export const createRoom = async (req, res, next) => {
  try {
    const { name, members } = req.body;
    if (!name || !members || members.length < 2) {
      return res
        .status(400)
        .json({ message: "Room name and at least two members required" });
    }
    const room = new ChatRoom({ name, members });
    await room.save();
    res.status(201).json({ message: "Room created", room });
  } catch (error) {
    next(error);
  }
};

// Delete Room
export const deleteRoom = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const room = await ChatRoom.findById(roomId);
    if (!room) return res.status(404).json({ message: "Room not found" });
    await ChatRoom.findByIdAndDelete(roomId);
    await Message.deleteMany({ roomId });
    res.status(200).json({ message: "Room and messages deleted" });
  } catch (error) {
    next(error);
  }
};

// Send Message
export const sendMessage = async (req, res, next) => {
  try {
    const { roomId, senderId, content } = req.body;
    const message = new Message({ roomId, senderId, content });
    await message.save();
    res.status(201).json({ message: "Message sent", data: message });
  } catch (error) {
    next(error);
  }
};

// Get Messages
export const getMessages = async (req, res, next) => {
  try {
    const { roomId } = req.params;
    const messages = await Message.find({ roomId }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};
