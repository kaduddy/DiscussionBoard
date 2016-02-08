var mongoose = require("mongoose");
var User = mongoose.model("User");
var Question = mongoose.model("Question");
var Answer = mongoose.model("Answer")

module.exports = {
	create: function(req, res) {
		var newAnswer = new Answer({
			text: req.body.text,
			like: 0,
			unlike: 0,
			_user: req.body.user,
			_question: req.body.question
		})
		newAnswer.save(function(err, newAnswer) {
			if(err) {
				res.send(err)
			}
			else {
				User.findOne({_id: req.body.user}, function(err, user) {
					user.answers.push(newAnswer);
					user.save(function(err) {
						if(err) {
							res.json(err)
						}
						else {
							Question.findOne({_id: req.body.question}, function(err, question) {
								console.log(req.body.question)
								question._answers.push(newAnswer);
								question.save(function(err) {
									if(err) {
										res.json(err)
									}
									else {
										console.log("backend")
										res.json(true)
									}
								})
							})
						}
					})
				})
			}
		})
	},

	update: function(req, res) {
		Answer.findOne({_id: req.params.id}, function(err, answer) {
			answer.like += 1
			if (err) {
				res.json(err)
			}
			else {
				answer.save(function(err) {
					if(err) {
						res.json(err)
					}
					else {
						res.json(true)
					}
				})
			}
		})
	},

	downdate: function(req, res) {
		Answer.findOne({_id: req.params.id}, function(err, answer) {
			answer.unlike -= 1
			if (err) {
				res.json(err)
			}
			else {
				answer.save(function(err) {
					if(err) {
						res.json(err)
					}
					else {
						res.json(true)
					}
				})
			}
		})
	}
}