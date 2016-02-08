myModule.controller("dashboardController", function(userFactory, questionFactory, $location) {
	this.user = userFactory.user;
	var self = this;

	function getQuestions() {
		questionFactory.getQuestions(function(questions) {
			self.questions = questions;
		})
	}
	getQuestions();

	this.addQuestion = function() {
		self.newQuestion.user = this.user 
		console.log(self.newQuestion)
		questionFactory.addQuestion(self.newQuestion, function() {
			getQuestions();
		})
		this.newQuestion = {};
	}


})