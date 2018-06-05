var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(req, res, next){
	console.log(123);
	res.render("reg", {
		title : "reg Page",
		tabs : ["首页","登陆","注册"],
		activeTab : "注册",
		// submitUser : function(event){
		// 	var username = $("#username").val();
		// 	var passworld1 = $("#passworld1").val();
		// 	var passworld2 = $("#passworld2").val();
		// 	$.ajax({
		// 		type : "post",
		// 		url "/reg",
		// 		data : {
		// 			username : username,
		// 			passworld1 : passworld1,
		// 			passworld2 : passworld2
		// 		},
		// 		success : function(data){
		// 			console.log(data);
		// 		}
		// 	});
		// }
	});
};;