var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {
	create: function(req, res) {
		User.findOne({name: req.body.name}, function(err, user) {
			if(!user) {
				var user = new User(req.body);
				user.save(function(err, user) {
					if(err) {
						res.json(err);
					}
					else {
						res.json(user);
					}
				})
			}
			else {
				res.json(user);
			}
		})
	},
	show: function(req, res) {
		User.findOne({_id: req.params.id}, function(err, user) {
			res.json(user);
		})
	},
	showme: function(req, res) {
		User.findOne({_id: req.params.id}, function(err, user) {
			console.log("XXXXXXX",req.params.id)
			console.log("showme", user)
			res.json(user)
		})
	}
}