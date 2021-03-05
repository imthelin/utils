/*
 * @Author: imthelin
 * @since: 2021-03-05 11:59:28
 * @lastTime: 2021-03-05 12:09:31
 * @LastAuthor: Do not edit
 * @FilePath: /utils/extends/proto+cons.js
 * @Description:
 * 关键代码：
 * 声明子类函数的时候 Parent.call(this)
 * Kid.prototype = new Parent()
 * Kid.prototype.constructor = Kid
 * 原型链继承、借用构造函数继承都有格子的缺点
 * 目的：
 * 1. 保持实例单例原则，不互相污染
 * 2. 能访问到父类的原型
 */

/**
 * @description: 先辈类别
 * @param {*} lastName
 * @return {*}
 */
function Parent(lastName = 'Smith') {
  this.lastName = lastName
  this.money = 1000000
  // 独特的行为放在构造函数构造实例中
  this.action = ['eat', 'sleep', 'run']
  // this.breath = function () {
  //   console.log(`im ${this.firstName} ${this.lastName}, i can breath`)
  // }
}

// 需要共享的数据类型都放到先辈类的原型对象上去
Parent.prototype.breath = function () {
  console.log(`im ${this.firstName} ${this.lastName}, i can breath`)
}
// 父母北京上海都有房子，大家公用，不用每次声明
Parent.prototype.house = ['Beijing', 'Shanghai']

function Kid(firstName) {
  Parent.call(this)
  this.firstName = firstName
}

Kid.prototype = new Parent()
Kid.prototype.constructor = Kid

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
console.log(fizz.breath === will.breath) // true
