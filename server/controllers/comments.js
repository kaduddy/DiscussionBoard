var mongoose = require("mongoose");
var User = mongoose.model("User");
var Answer = mongoose.model("Answer");
var Comment = mongoose.model("Comment")

module.exports = {
	create: function(req, res) {
		var newComment = new Comment({
			text: req.body.comment.text,
			_user: req.body.user,
			_answer: req.body.answer
		})

		newComment.save(function(err, newComment) {
			if(err) {
				res.send(err)
			}
			else {
				User.findOne({_id: req.body.user}, function(err, user) {
					user.comments.push(newComment);
					user.save(function(err) {
						if(err) {
							res.json(err);
						}
						else {
							Answer.findOne({_id: req.body.answer}, function(err, answer) {
								answer._comments.push(newComment);
								answer.save(function(err) {
									if(err) {
										res.json(err)
									}
									else{
										res.json(true)
									}
								})
							})
						}
					})
				})
			}
		})
	}
}