var router = require('express').Router();

var tweets = [
	{
		username: "Asif",
		time: new Date(),
		tweet: "This is my first tweet"
	},
	{
		username: "Ayanga",
		time: new Date(),
		tweet: "This is my fifth tweet"
	}
];


router.get('/', function(req, res){
	var response = {
		error: null, 
		data: tweets
	}
	res.send(JSON.stringify(response));
});

module.exports = router;