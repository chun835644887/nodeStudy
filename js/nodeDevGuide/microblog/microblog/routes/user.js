var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(req, res, next){
	var id = req.params.id;
	res.render("user", {
		title : "User Page"
	});
};