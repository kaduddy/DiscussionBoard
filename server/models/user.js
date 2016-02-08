var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	questions: [{type: Schema.Types.ObjectId, ref: "Question"}],
	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
	comments: [{type: Schema.Types.ObjectId, ref: "Comment"}]
})

mongoose.model("User", UserSchema);