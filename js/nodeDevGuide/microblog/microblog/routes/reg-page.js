var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(req, res, next){
	res.render("reg", {
		title : "reg Page",
		tabs : ["首页","登陆","注册"],
		activeTab : "注册",
	});
};;