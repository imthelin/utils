/*
 * @Author: imthelin
 * @since: 2021-03-05 10:41:47
 * @lastTime: 2021-03-05 11:40:09
 * @LastAuthor: Do not edit
 * @FilePath: /utils/extends/__proto__.js
 * @Description: 
 * 说明原型链继承的问题
 * 在先辈原型上初始化一些引用数据类型，所以子类实例在改变这些数据的时候，会导致所有
 * 子类实例的数据变化，这明显违反了单一实例数据。
 * 比如家族中所有人都能 eat\sleep\run，然后孩子 will 学会了 fly，很夸张，但是
 * 容易理解，那么显然其他孩子还没有学，不应该具有这个 action
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
will.action.push('fly')

let fizz = new Kid('fizz')

console.log(will);
console.log(fizz);
console.log(will.action); // ["eat", "sleep", "run", "fly"]
console.log(fizz.action); // ["eat", "sleep", "run", "fly"]