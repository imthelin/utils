/*
 * @Author: imthelin
 * @since: 2021-03-05 11:42:07
 * @lastTime: 2021-03-05 11:58:50
 * @LastAuthor: Do not edit
 * @FilePath: /utils/extends/constructor.js
 * @Description:
 * 核心代码：Parent.call(this)
 * 缺点：
 * 1. 无法访问到先辈类原型对象上的属性和方法，只能访问先辈调用构造函数构造出来的实例上的属性和方法
 * 2. 每次构造都构造了一些没必要多次声明的引用数据类型，比如下面这个 breath 函数，大家都用一个呼吸函数就好。
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
  this.breath = function () {
    console.log(`im ${this.firstName} ${this.lastName}, i can breath`);
  }
}

function Kid(firstName) {
  Parent.call(this)
  this.firstName = firstName
}

let will = new Kid('will')
// will 学会了飞行
will.action.push('fly')
will.breath()

let fizz = new Kid('fizz')
fizz.breath()

console.log(will)
console.log(fizz)
console.log(will.action) // ["eat", "sleep", "run", "fly"]
console.log(fizz.action) // ["eat", "sleep", "run"]
console.log(fizz.breath === will.breath) // false
