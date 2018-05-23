const fs = require("fs");
fs.readFile("test.txt","utf-8",function(err,data){
	if(err){
		console.err(err);
	}else{
		console.log(`${data}`);
	}
});
console.log("end");

console.log("start sync readFile");
var data = fs.readFileSync("test.txt","utf-8");
console.log(`同步读取：${data}`);
