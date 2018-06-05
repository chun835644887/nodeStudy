var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(req, res, next){
	var body = req.body;
	console.log(`${JSON.stringify(req.body)}`)
	if(body.username && username.passworld1 == username.passworld2){
		res.redirect('/main/');
	}
};