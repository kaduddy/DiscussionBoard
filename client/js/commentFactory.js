myModule.factory("commentFactory", function($http) {
	var factory = {};

	factory.addComment = function(newComment, callback) {
		$http.post("/comments", newComment).success(function() {
			callback();
		})
	}
	
	return factory;
})