var express = require('express');
var router = express.Router();
var query = require("../public/javascripts/mysql");

module.exports = function(req, res, next){
	var body = req.body;
	if(body.username && body.passworld){
		var sql = "select * from user where username='"
		 + body.username + "' and pwd='" + body.passworld + "'";
		 console.log(sql)
		query.query(sql,function(err,results,fields){
			if(results.length){
				console.log('success-------->')
				return res.redirect('/reg-page');
			}else{
				console.log('error-------->')
				res.respone("账号或者密码错误，请重新输入");
			}
		})
	}
}