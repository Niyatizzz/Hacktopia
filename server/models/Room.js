import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);
export default ChatRoom;
