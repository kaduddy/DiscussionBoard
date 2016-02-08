var myModule = angular.module("myApp", ["ngRoute"]);

myModule.config(function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/signup.html",
		controller: "usersController",
		controllerAs: "usersCtrl"
	})
	.when("/dashboard", {
		templateUrl: "/partials/dashboard.html",
		controller: "dashboardController",
		controllerAs: "dashboardCtrl"
	})
	.when("/topic/:id", {
		templateUrl: "/partials/topic.html",
		controller: "topicsController",
		controllerAs: "topicsCtrl"
	})
	.when("/users/show/:id", {
		templateUrl: "/partials/user.html",
		controller: "userController",
		controllerAs: "userCtrl"
	})
	.otherwise({
		redirectTo: "/"
	})
})