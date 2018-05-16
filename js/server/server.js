var http = require("http");

const hostName = "127.0.0.1";
const post = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("hello world! i am node.");
});
server.listen(post, hostName, () => {
	console.log(`Server running at http://${hostName}:${post}/`);
});