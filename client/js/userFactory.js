myModule.factory("userFactory", function ($http) {
	var factory = {};
	factory.user = {};

	factory.createUser = function(user, callback) {
		$http.post("/users", user).success(function(user) {
			factory.getOneUser(user._id, callback);
		});
	}

	factory.getOneUser = function(userID, callback) {
		$http.get("/users/" + userID).success(function(user) {
			factory.user = user;
			if (callback) {
				callback(user);
			}
		})
	}

	factory.getUser = function(user, callback) {
		$http.get("/users/show/" + userID).success(function(user) {
			console.log("factroy", userID)
			console.log("factory", user)
			callback(user);
		})
	}
	
	return factory;
})