var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);


var Schema = mongoose.Schema;

var QuestionSchema = new Schema ({
	topic: String,
	description: String,
	category: String,
	date: {type: Date, default: Date.now},
	_user: {type: Schema.Types.ObjectId, ref: "User"},
	_answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
	_comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]


})

QuestionSchema.plugin(deepPopulate);
var Question = mongoose.model("Question", QuestionSchema)



// Comment 
// _user: {}
// _answer: {}
// text