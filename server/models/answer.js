var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema;

var AnswerSchema = new Schema ({
	text: String,
	like: Number,
	unlike: Number,
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	_question: {type: Schema.Types.ObjectId, ref: "Question"},
	_comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]

})

AnswerSchema.plugin(deepPopulate);
var Answer = mongoose.model("Answer", AnswerSchema)