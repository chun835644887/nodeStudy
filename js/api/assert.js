
/**
 * [assert description]
 * @type {[type]}
 * assert.deepEqual(actual, expected, message)
 * actual : 作为比较值
 * expected : 被比较值
 * message ： 不相等时抛出一个AssertionError 如果又配置message，内容为message
 */
const assert = require("assert");

const obj1 = {
	a : {
		b : 1
	}
};
const obj2 = {
	a : {
		b : 2
	}
};
const obj3 = {
	a : {
		b : 1
	}
};
const obj4 = Object.create(obj1);

console.log(assert.deepEqual(obj1,obj1));
console.log(assert.deepEqual(obj1,obj2,"不相等"));
console.log(assert.deepEqual(obj1,obj3,"不相等"));
console.log(assert.deepEqual(obj1,obj4));

/**
 * [a description]
 * @type {[type]}
 * assert.deepStrictEqual参数与deepEqual一样，
 * deepStrictEqual执行的似乎 ===  (1 !== '1')
 * deepEqual 执行的是 == (1 == '1')
 */
assert.deepEqual({ a: 1 }, { a: '1' });
// 由于 1 == '1'

assert.deepStrictEqual({ a: 1 }, { a: '1' });
// 由于 1 !== '1' using strict equality