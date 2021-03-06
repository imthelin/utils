/*
 * @Author: imthelin
 * @since: 2021-03-06 22:49:56
 * @lastTime: 2021-03-06 23:12:13
 * @LastAuthor: Do not edit
 * @FilePath: /utils/new/index.js
 * @Description: 手写一个 new
 */

/*  new 做了什么
1. 创建一个空对象 obj
2. this 指向 obj,this = obj
3. 把这个 obj 的原型对象挂到被调用构造的函数的原型对象上去， obj.__proto__ = constructor.prototype
4. 返回情况：
  4.1. 没有显式 return、return 非对象数据、return null。这个时候都返回 this
  4.2  显式 return 对象，比如 return {}，则返回这个空对象
  总结：显式返回一个非null对象数据类型 theObj，则 new 后得到这个 theObj，其他都是得到这个 this.
*/

function Car(name) {
  this.name = name
}
let hondaCar = new Car('honda')
console.log(hondaCar);

/* 手写一个 TinyNew
1. 可以接受参数
2. 函数内部创建一个空对象 obj
3. obj.__proto -> constructor.prototype
4. 传递参数到 obj,constructor.call\constructor.bind 操作这个 obj
5. 构造函数是否 return 对象数据类型，没有则返回 this,否则返回指定对象。
*/
function TinyNew() {
  const obj = {}
  const theConstructor = [...arguments][0]
  const theApplyArgs = [...arguments][1]
  Object.setPrototypeOf(obj, theConstructor.prototype)
  theConstructor.apply(obj, theApplyArgs)
  return obj
}
let bwmCar = TinyNew(Car, ['bwm'])
console.log(bwmCar);
