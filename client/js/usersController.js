myModule.controller("usersController", function(userFactory, $location) {
	this.create = function(user) {
		userFactory.createUser(user, function() {
			$location.path("/dashboard");
		});
	}
})