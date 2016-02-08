myModule.factory("questionFactory", function($http) {
	var factory = {};
	factory.addQuestion = function(newQuestion, callback) {
		console.log(newQuestion)
		$http.post("/questions", newQuestion).success(function() {
			callback();
		})
	}

	factory.getQuestions = function(callback) {
		$http.get("/questions").success(function(questions) {
			callback(questions)
		})
	}
	factory.getOneQuestion = function(questionID, callback) {
		$http.get("/questions/" + questionID).success(function(question) {
			callback(question);
		})
	}
	
	return factory;
})