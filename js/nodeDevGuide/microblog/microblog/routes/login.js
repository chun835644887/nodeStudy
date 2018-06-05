var express = require('express');
var router = express.Router();

/* GET login page. */


module.exports = function(req, res, next){
	res.render("login", {
		title : "reg Page",
		tabs : ["首页","登陆","注册"],
		activeTab : "登陆"
	});
};