import mongoose from "mongoose";

const codeSessionSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    code: {
      type: String,
      default: "",
    },
    language: {
      type: String,
      default: "javascript",
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const CodeSession = mongoose.model("CodeSession", codeSessionSchema);
export default CodeSession;
