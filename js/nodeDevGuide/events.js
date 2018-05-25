/**
 * [events description]
 * @type {[type]}
 * EventEmitter.on(eventName,callBack);注册一个事件
 * EventEmitter.emit(eventName[,arg1,arg2...])触发某个事件
 * EventEmitter.once(eventName,callBack);注册一个只触发一次的事件
 * EventEmitter.removeListerer(eventName,listener);移除指定事件的某个监听器
 * EventEmitter.removeAllListerers(eventName)移除指定事件的所有监听器
 *
 * eventName:事件名字
 * callback:监听事件触发回调
 * arg1...触发时可以传多个参数
 * listener:事件注册时的回调函数
 * EventEmitter为EventEmitter的对象
 */
const events = require("events");

const emitter = new events.EventEmitter();
const cb1 = function(arg1,arg2){
	console.log(`自定义事件1：参数agr1:${arg1},参数arg2:${arg2}`);
};
const cb2 = function(arg1,arg2){
	console.log(`自定义事件2：参数agr1:${arg1},参数arg2:${arg2}`);
}
const listener1 = emitter.on("customEvent",cb1);
const listener2 = emitter.on("customEvent",cb2);
emitter.removeListener("customEvent",cb1);

emitter.emit("customEvent","first argument", "second argument");