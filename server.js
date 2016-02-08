var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/client"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000, function() {
	console.log("WOOT WOOT I'M RUNNING ON PORT 8000")
})