var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(req, res, next){
	res.render("microblogIndex", {
		title : "Main Page"
	});
};