/**
 * [http description]
 * @type {[type]}
 * http.createServer(req, res);
 * http.Server(request, connection, close)
 * http.ServerRequest
 * 		
 * request：当客户端请求到来时，该事件被触发，提供两个参数 req 和res
 * 			，分别是http.ServerRequest 和 http.ServerResponse 的实例，表示请求和响应信息。
 * connection:当 TCP 连接建立时，该事件被触发，提供一个参数 socket,为
 * 				net.Socket 的实例。 connection 事件的粒度要大于 request，因为客户端在
 *     			Keep-Alive 模式下可能会在同一个连接内发送多次请求
 * close:当服务器关闭时，该事件被触发。注意不是在用户连接断开时。
 */
const http = require("http");
const url = require("url");
const util = require("util");

http.createServer((req,res) => {
	res.writeHead(200,{
		"Content-Type" : "text/html"
	});
	res.write("<h1>Node.js</h1><h2>" 
		+ util.inspect(url.parse(req.url,true)) 
		+ "</h2>");
	res.end("<p>hello world!</p>");
}).listen(3000);

const server = new http.Server();
server.on("request",(req, res) => {
	res.writeHead(200,{
		"Content-Type" : "text/html"
	});
	res.write("<h1 style=\"color:green;\">Node.js http.Server</h1>");
	res.end("<p>server</p>");
});
server.on("close",() => {
	console.log("server is close");
})
server.listen(3001);