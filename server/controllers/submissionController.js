import Submission from "../models/Submission.js";

export const createSubmission = async (req, res) => {
  try {
    const { roomId, code, language } = req.body;

    const newSubmission = new Submission({
      roomId,
      userId: req.user._id,
      code,
      language,
      result: "Pending",
    });

    await newSubmission.save();
    res.status(201).json(newSubmission);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating submission", error: error.message });
  }
};

export const getSubmissionsByRoom = async (req, res) => {
  try {
    const { roomId } = req.params;
    const submissions = await Submission.find({ roomId }).populate(
      "userId",
      "name email"
    );
    res.status(200).json(submissions);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching submissions", error: error.message });
  }
};

export const deleteSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const submission = await Submission.findById(id);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }

    if (submission.userId.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this submission" });
    }

    await submission.deleteOne();
    res.status(200).json({ message: "Submission deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting submission", error: error.message });
  }
};
