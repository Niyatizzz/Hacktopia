import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: "javascript",
    },
    result: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;
