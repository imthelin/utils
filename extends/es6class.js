/*
 * @Author: imthelin
 * @since: 2021-03-05 12:10:29
 * @lastTime: 2021-03-05 13:22:14
 * @LastAuthor: Do not edit
 * @FilePath: /utils/extends/es6class.js
 * @Description:
 */

class Parent {
  constructor(lastName) {
    this.lastName = lastName
    this.money = 1000000
    // 独特的行为放在构造函数构造实例中
    this.action = ['eat', 'sleep', 'run']
  }
  breath() {
    console.log(`im ${this.firstName} ${this.lastName}, i can breath`)
  }
  static age = 40
  static work() {
    console.log('work for home.kid still young~~');
  }
}

class Kid extends Parent {
  constructor(firstName, lastName) {
    super(lastName)
    this.firstName = firstName
  }
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
console.log(fizz.breath === will.breath) // true