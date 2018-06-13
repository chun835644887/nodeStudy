var mysql = require('mysql');

var connection = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "123456",
	database : "test"
});
connection.connect();
connection.query("select * from user;",function(erroe,results,fields){
	console.log(`${JSON.stringify(results)}`)
});