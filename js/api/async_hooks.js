/**
 * [async_hooks description]
 * @type {[type]}
 * createHook({init : init,before,after,destroy,promiseResolve})
 * 参数都是function
 *
 * enable 启用hookasyncHook的回掉函数
 * disable 禁用asyncHook的回掉函数
 * triggerAsyncId 无参数 返回触发异步回调的id
 */
const async_hooks = require("async_hooks");
const fs = require('fs');
const util = require('util');

function init(asyncId, type, triggerAsyncId, resource){
	fs.writeSync(1, `init: asyncId-${asyncId},type-${type},triggerAsyncId-${triggerAsyncId}\n`);
	// console.log("init:---->",asyncId, type, triggerAsyncId, resource);
}
function before(asyncId){
	// console.log('before:------------------->');
	// console.log("before:----->",asyncId);
	fs.writeSync(1, `before: asyncId-${asyncId}\n`);
}
function after(asyncId){
	// console.log('after:------------------->');
	// console.log("after:----->",asyncId);
	fs.writeSync(1, `after: asyncId-${asyncId}\n`);
}
function destroy(asyncId){
	// console.log('destroy:------------------->');
	// console.log("destroy:----->",asyncId);
	fs.writeSync(1, `destroy: asyncId-${asyncId}\n`);
}
function promiseResolve(asyncId) {
	console.log('promiseResolve:------------------->');
	console.log("promiseResolve:----->",asyncId);
}
function callBack(){
	console.log("callBack");
}
const asyncHook = async_hooks.createHook({init : init,before,after,destroy,promiseResolve});
asyncHook.enable();
setTimeout(function(){
	console.log('hello');
	asyncHook.disable();
},1000);