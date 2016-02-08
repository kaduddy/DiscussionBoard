myModule.controller("userController", function(userFactory, questionFactory, $location, $routeParams) {

	this.user = {};
	var self = this;

	userID = $routeParams.id


	function getUser() {
		userFactory.getUser($routeParams.id, function(user) {
			console.log($routeParams.id)
			self.user = user;
			console.log("userCtrl", user);
		});
	}

	getUser();

})