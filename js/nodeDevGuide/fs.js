/**
 * [fs description]
 * @type {[type]}
 * fs.readFile(file,code,callback)
 * fs.readFileSync(file,code)读取到的内容以返回值的形式返回，需要用try catch捕获并处理异常
 * fs.open(file, flags, [mode], [callback(err, fd)])
 * fs.read(fd, buffer, offset, length, position, [callback(err, bytesRead,buffer)])
 * file:文件名,
 * code:读取的编码格式,
 * callbakc:回调函数
 * flag可以为以下值
 * 		r : 以读取的模式打开文件
 * 		r+: 以读写的模式打开文件
 * 		w : 以写入的模式打开文件，文件不存在就创建
 * 		w+: 以读写的模式打开文件，文件不存在就创建
 * 		a : 以追加模式打开文件，如果文件不存在则创建
 * 		a+: 以读取追加模式打开文件，如果文件不存在则创建
 * 	mode:创建文件时给定的权限默认（0666）【文件权限指的是 POSIX 操作系统中对文件读取和访问权限的规范】
 * 	err:异常
 * 	fd:文件描述符是一个非负整数，表示操作系统内核为当前进程所维护的打开文件的记录表索引。
 * 	buffer:一个Buffer对象
 * 	offset:buffer 的写入偏移量
 * 	length:读取多长的字节数
 * 	position:是文件读取的起始位置
 * 	bytesRead：读取的字节数
 * 	buffer:缓冲区的对象（读取到的内容）
 */
const fs = require("fs");
fs.readFile("./test.txt", "utf-8", (err,data) => {
	if(err){
		console.error(err);
	}
	console.log(`this is context form text.txt==> ${data}`);
});

fs.open("./test.txt", "r", function(err,fd){
	if(err){
		console.error(err);
		return;
	}
	var buf = new Buffer(8);
	fs.read(fd,buf, 0 , 8, null, (err,byteRead,buffer) => {
		if(err){
			console.error(err);
		}
		console.log(`byteRead:${byteRead}`);
		console.log(`buffer:${buffer}`);
	})
});