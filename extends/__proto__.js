/*
 * @Author: imthelin
 * @since: 2021-03-05 10:41:47
 * @lastTime: 2021-03-05 11:58:20
 * @LastAuthor: Do not edit
 * @FilePath: /utils/extends/__proto__.js
 * @Description: 
 * 核心代码：Kid.prototype = new Parent()
 * 缺点：
 * 1. 在先辈原型上初始化一些公用的引用数据类型，
 * 子类实例在改变这些数据的时候，会导致所有子类实例
 * 的数据变化，这明显违反了单一实例数据。
 * 比如家族中所有人都能 eat\sleep\run，然后孩子 will 学会了 fly，很夸张，但是
 * 容易理解，那么显然其他孩子还没有学，不应该具有这个 action
 * 2. 丢失了 Kid.prototype.constructor
 */


/**
 * @description: 先辈类别
 * @param {*} lastName
 * @return {*}
 */
function Parent(lastName = 'Smith') {
  this.lastName = lastName
  this.money = 1000000
  this.action = ['eat', 'sleep', 'run']
}

function Kid(firstName) {
  this.firstName = firstName
}

Kid.prototype = new Parent()
// 保持构造函数指向
Kid.prototype.constructor = Kid

let will = new Kid('will')
// will 学会了飞行
will.action.push('fly')

let fizz = new Kid('fizz')

console.log(will);
console.log(fizz);
console.log(will.action); // ["eat", "sleep", "run", "fly"]
console.log(fizz.action); // ["eat", "sleep", "run", "fly"]