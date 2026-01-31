import Question from '../models/Question.js';

// Fetch today's question
export const getTodayQuestion = async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const question = await Question.findOne({ activeDate: today });

    if (!question) {
      return res.status(404).json({ message: "No question assigned for today." });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mock Evaluation
export const submitAnswer = async (req, res) => {
  const { questionId, code } = req.body;
  
  // Basic mock: check if code exists and simulate a result
  if (!code || code.length < 10) {
    return res.status(400).json({ status: "Incorrect", message: "Code is too short or empty." });
  }

  const isSuccess = Math.random() > 0.2; // 80% success rate for mock
  res.status(200).json({
    status: isSuccess ? "Correct" : "Incorrect",
    feedback: isSuccess ? "All test cases passed!" : "Time Limit Exceeded on test case #4",
    submittedAt: new Date()
  });
};