import CodeSession from "../models/CodeSession.js";

export const createCodeSession = async (req, res) => {
  const { roomId, code, language, updatedBy } = req.body;
  try {
    const session = await CodeSession.create({
      roomId,
      code,
      language,
      updatedBy,
    });
    res.status(201).json(session);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create code session", error: err.message });
  }
};

export const getCodeSession = async (req, res) => {
  const { roomId } = req.params;
  try {
    const session = await CodeSession.findOne({ roomId });
    if (!session)
      return res.status(404).json({ message: "No code session found" });
    res.status(200).json(session);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve code session", error: err.message });
  }
};

export const updateCodeSession = async (req, res) => {
  const { roomId } = req.params;
  const { code, language, updatedBy } = req.body;

  try {
    const session = await CodeSession.findOneAndUpdate(
      { roomId },
      { code, language, updatedBy },
      { new: true, upsert: true }
    );
    res.status(200).json(session);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update code session", error: err.message });
  }
};

export const deleteCodeSession = async (req, res) => {
  const { roomId } = req.params;
  try {
    const deleted = await CodeSession.findOneAndDelete({ roomId });
    if (!deleted) return res.status(404).json({ message: "Session not found" });
    res.status(200).json({ message: "Code session deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete code session", error: err.message });
  }
};
