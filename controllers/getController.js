const asyncHandler = require("express-async-handler");
const QuestionBank = require("../models/quesBankModel");

// Get all the questions
// Route GET /api/ques
const getQuestions = asyncHandler(async (req, res) => {
  const questions = await QuestionBank.find();

  res.status(200).json(questions);
});

// Set question
// Route POST /api/ques
const setQuestion = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a question!");
  }

  const question = await QuestionBank.create(req.body);

  res.status(200).json(question);
});

// Update question
// Route PUT /api/ques/:id
const updateQuestion = asyncHandler(async (req, res) => {
  const question = await QuestionBank.findById(req.params.id);

  if (!question) {
    req.status(400);
    throw new Error("Question not found!");
  }
  const updatedQuestion = await QuestionBank.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  console.log("update question", updatedQuestion);
  res.status(200).json(updatedQuestion);
});

// Delete question
// Route DELETE /api/ques
const deleteQuestion = asyncHandler(async (req, res) => {
  const question = await QuestionBank.findById(req.params.id);
  if (!question) {
    req.status(400);
    throw new Error("Question not found!");
  }

  await question.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
};
