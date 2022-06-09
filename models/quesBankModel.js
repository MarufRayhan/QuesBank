const mongoose = require("mongoose");

const quesBankScehema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please add a question"],
    },
    answer: {
      type: String,
      maxlength: 400,
    },
    questionType: {
      type: String,
      required: [true, "Please add a question type"],
    },
    tag: {
      type: String,
      required: [true, "Please add a question tag"],
    },
    quesRank: {
      type: String,
      required: [true, "Please add a question question rank"],
    },
    difficultyLevel: {
      type: String,
      required: [true, "Please add a difficulty level"],
    },
    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuestionBank", quesBankScehema);
