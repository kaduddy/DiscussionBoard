var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");


module.exports = {

	index: function(req, res) {
		Question.find({}).sort({date: 1}).populate("_user").exec(function(err, questions) {
			res.json(questions)
		})
		// Question.find({}).deepPopulate("_user").exec(function(err, questions) {
		// 	res.json(questions)
		// })
		// Question.deepPopulate
	},

	create: function(req, res) {
		var newQuestion = new Question({
			topic: req.body.topic,
			description: req.body.description,
			category: req.body.category,
			_user: req.body.user
		})

		newQuestion.save(function(err, newQuestion) {
			if(err) {
				res.send(err)
			}
			else {
				User.findOne({_id: req.body.user}, function(err, user) {
					user.questions.push(newQuestion);
					user.save(function(err) {
						if(err) {
							res.json(err)
						}
						else {
							res.json(true)
						}
					})
				})
			}
		})
	},
	show: function(req, res) {
		Question.findOne({_id: req.params.id}).deepPopulate(["._user", "_answers", "_answers._user", "_answers._question", "_answers._comments", "_answers._comments._user"]).exec(function(err, question) {
			res.json(question)
		})
	}
}