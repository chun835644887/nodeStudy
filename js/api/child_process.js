/**
 * 创建异步进程
 * spawn，fork，exec，ececField
 * 
 * spawn(commond[,options])
 * exec(command[,options][,callback])
 * command <string> 运行的命令，参数使用空格分隔。
 * options <Object> 
 * 		cwd <string> 子进程的当前工作目录。
 * 		env <Object> 环境变量键值对
 * 		encoding <string> 默认为 'utf8'。
 * 		shell <string> 执行命令的 shell。在 UNIX 上默认为 '/bin/sh'，在 Windows 上默认为 process.env.ComSpec。详见Shell的要求与Windows默认的Shell。
 * 		timeout <number> 默认为 0。
 * 		maxBuffer <number> stdout 或 stderr 允许的最大字节数。默认为 200*1024。如果超过限制，则子进程会被终止。详见 maxBuffer与Unicode。
 * 		killSignal <string> | <integer> 默认为 'SIGTERM'。
 * 		uid <number> 设置进程的用户标识，详见 setuid(2)。
 * 		gid <number> 设置进程的组标识，详见 setgid(2)。
 * 		windowsHide <boolean> 隐藏子进程的控制台窗口，常用于 Windows 系统。默认为 false。
 * 	callback
 * 		error <Error>	
 * 		stdout <string> | <Buffer>
 * 		stderr <string> | <Buffer>
 */
const {spawn} = require("child_process");
const ls = spawn("ls",{
	windowsHide : false
});

ls.stdout.on("data", (data) => {
	console.log(`输出：${data}`);
});

ls.stderr.on("data", (data) => {
	console.log(`Ereroe:${data}`);
});
ls.on("close",(code) => {
	console.log(`子进程退出:${code}`);
});

// const bat = spawn("cmd.exe",["/c","my.bat"]);
// bat.stdout.on("data",(data) => {
// 	console.log(`输出：${data.toString()}`);
// });
// bat.stderr.on("error",(data) => {
// 	console.log(`Error:${data.toString()}`);
// });
// setTimeout(() => {
// 	bat.on("exit",(code) => {
// 		console.log(`子窗口退出:${code}`);
// 	});
// },2000);