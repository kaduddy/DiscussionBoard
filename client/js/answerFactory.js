myModule.factory("answerFactory", function($http) {
	var factory = {};
	
	factory.addAnswer = function(newAnswer, callback) {
		$http.post("/answers", newAnswer).success(function() {
			callback();
		})
	}

	factory.voteUp = function(answer, callback) {
		$http.post("/answers/up/" + answer._id).success(function() {
			console.log("vote up", answer)
			callback();
		})
	}

	factory.voteDown = function(answer, callback) {
		$http.post("/answers/down/" + answer._id).success(function() {
			callback();
		})
	}

	return factory;
})