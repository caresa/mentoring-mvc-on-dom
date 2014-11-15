var QuizModel = function (configs) {
  this.questions = configs.questions;
  this.lastQuestionNumber = this.questions.length - 1;
};

QuizModel.prototype.currentQuestion = 0;
QuizModel.prototype.nextQuestion = function () {
  if(this.onLastQuestion()){
    // tell view to display score
  } else {
    this.currentQuestionIndex++;
  }
};

QuizModel.prototype.onLastQuestion = function () {
  return this.currentQuestionIndex === this.lastQuestionNumber;
};

QuizModel.prototype.getCurrentQuestion = function () {
  return this.currentQuestionIndex[this.currentQuestionIndex];
};
