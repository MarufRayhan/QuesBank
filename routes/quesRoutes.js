const express = require("express");
const router = express.Router();
const {
  getQuestions,
  setQuestion,
  updateQuestion,
  deleteQuestion,
} = require("../controllers/getController");

router.route("/").get(getQuestions).post(setQuestion);
router.route("/:id").delete(deleteQuestion).put(updateQuestion);

module.exports = router;
