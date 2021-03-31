/*
 * @Author: imthelin
 * @since: 2021-03-27 15:01:44
 * @lastTime: 2021-03-27 15:51:23
 * @LastAuthor: Do not edit
 * @FilePath: /utils/instance.js
 * @Description:
 */

/*

1. 手写 instanceof
2. 闭包
3. vueX mutation\action 区别
4. $nextTick() 实现
4. webpack 配置，plg loader 区别
5. GET POST，post 预请求
6. http 缓存
7. 阅读 2.0 源码，$nextTick 先使用 Process.nextTick -> promise.resolve -> setTimeout
8. 前端路由的实现

react antD  城市管理

 */

function getType(val) {
  let str = Object.prototype.toString.call(val)
  console.log(str)
  return str.slice(8, -1)
}
console.log(getType('123'));

function theInstanceOf(obj, cons) {
  // Object.getPrototypeOf === __proto__
  let theProto = Object.getPrototypeOf(obj)
  while (theProto.constructor !== cons) {
    theProto = Object.getPrototypeOf(theProto)
    if (theProto === null) return false
    if (theProto.constructor === cons) {
      return true
    }
  }
  return true
}

let obj = {}
theInstanceOf(obj, Object)
console.log(obj instanceof Object);
console.log(theInstanceOf(obj, Object), 'theInstanceOf');
