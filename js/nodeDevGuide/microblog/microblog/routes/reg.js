var express = require('express');
var router = express.Router();
var query = require("../public/javascripts/mysql");

/* GET home page. */
module.exports = function(req, res, next){
	var body = req.body;
	if(body.username 
		&& body.passworld1 == body.passworld2 
		&& body.sex
		&& body.idCard){
		query.query("select * from user where username='" + body.username + "'",function(err, results, fields){
			if(err){
				return err;
			}
			if(!results.length){
				var isertSql = "insert into user(username,sex,pwd,idcard) values(" 
					+ "'" + body.username + "',"
					+ "'" + body.sex + "',"
					+ "'" + body.passworld1 + "',"
					+ "'" + body.idCard + "'"
					+ ")"
					console.log(isertSql)
				query.query(isertSql, function(err, results, fields){
					console.log(123);
					if(err){
						console.log(err);
						return err;
					}
					console.log(456);
					console.log(results,fields);
				});
			}else{
				// res.
			}
		});
		// res.redirect('/main');
	}
};