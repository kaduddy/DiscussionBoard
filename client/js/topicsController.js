myModule.controller("topicsController", function(userFactory, questionFactory, answerFactory, commentFactory, $location, $routeParams) {
	this.user = userFactory.user;
	this.question = {};
	this.answer = {};
	var self = this;

	var questionID = $routeParams.id
	
	function getOneQuestion() {
		questionFactory.getOneQuestion($routeParams.id, function(question) {
			self.question = question;
		});
	}
	getOneQuestion();

	this.addAnswer = function() {
		self.newAnswer.user = this.user;
		self.newAnswer.question = this.question;
		answerFactory.addAnswer(self.newAnswer, function() {
			getOneQuestion();
		})
		this.newAnswer = {};
	}

	this.addComment = function(comment, answer) {
		self.newComment = {
			user: this.user,
			answer: answer,
			comment: comment
		}

		commentFactory.addComment(self.newComment, function() {
			getOneQuestion();
		})
		this.newComment = {};
	}

	this.voteUp = function(answer) {
		answerFactory.voteUp(answer, function() {
			getOneQuestion();
		})	
	}

	this.voteDown = function(answer) {
		answerFactory.voteDown(answer, function() {
			getOneQuestion();
		})
	}

})