var Users = require("./../controllers/users.js");
var Questions = require("./../controllers/questions.js");
var Answers = require("./../controllers/answers.js");
var Comments = require("./../controllers/comments.js")



module.exports = function(app) {
	
	app.post("/users", Users.create);

	app.get("/users/:id", Users.show);

	app.get("/users/show/:id", Users.showme);

	app.post("/questions", Questions.create);

	app.get("/questions", Questions.index);

	app.get("/questions/:id", Questions.show);

	app.post("/answers", Answers.create);

	app.post("/answers/up/:id", Answers.update);

	app.post("/answers/down/:id", Answers.downdate);

	app.post("/comments", Comments.create);

}