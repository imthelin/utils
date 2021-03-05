/*
 * @Author: imthelin
 * @since: 2021-03-05 14:28:34
 * @lastTime: 2021-03-05 14:54:06
 * @LastAuthor: Do not edit
 * @FilePath: /utils/this/tiny-apply.js
 * @Description: 
 */

Function.prototype.tinyCall = function () {
  // 此时 this 函数本身地址，它点出来的
  const fn = this
  // 取出需要绑定的上下文,保底，取全局对象 globalThis
  const context = [...arguments][0] || globalThis
  // 和 tiny-call 唯一区别的一行，没有 slice
  const args = [...arguments][1]
  // 获取一个唯一key，这里用 Symbol 保证了唯一性
  const fnKey = Symbol('funcKey')
  // 被绑定上下文增加一个函数，指针指向需要调用的函数的地址
  context[fnKey] = fn
  // 直接调用即可
  context[fnKey](...args)
  // 删掉，防止占用内存，考虑下 v8 隐藏类，这里可能影响了这个对象以后的查询速度
  delete context[fnKey]
}

Person = {
  name: 123
}

let sayName = function (msg) {
  console.log(this);
  console.log(this.name, msg);
}

// sayName()
sayName.tinyCall(Person, ['shit', 25])
