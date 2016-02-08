var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
	text: String,
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	_answer: {type: Schema.Types.ObjectId, ref: "Answer"}, 
})

mongoose.model("Comment", CommentSchema);