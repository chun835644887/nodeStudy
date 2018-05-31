var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(`${req}`);
  	res.send('respond with a resource' );
});

module.exports = function(req, res, next) {
	console.log(`${JSON.stringify(req.params)}`);
  	res.send('respond with a resource' );
};
