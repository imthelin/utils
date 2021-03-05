/*
 * @Author: imthelin
 * @since: 2021-03-05 13:38:57
 * @lastTime: 2021-03-05 14:22:09
 * @LastAuthor: Do not edit
 * @FilePath: /utils/tiny-bind/index.js
 * @Description: 
 */


const fizz = {
  name : 'fizz'
}

function sayName(age) {
  this.age = age
  console.log(this.name, this.age)
}

Function.prototype.tinyBind = function (context) {
  // 确保是被 function 调用，上下文是 function
  if (typeof this !== 'function') {
    console.log('need a function');
    return
  }
  // tinyBind 传入的参数，第一个是上下文，所以从第二个开始取
  const arg = Array.prototype.slice.call(arguments, 1)
  // this 是函数本身,函数是 tinyBind 的原上下文
  const fn = this
  // 返回一个函数指针
  return function () {
    // 通过闭包去保存首次传入参数
    const insideArgs = [...arguments]
    const finalArgs = arg.concat(insideArgs)
    fn.call(context, ...finalArgs)
    // fn.apply(context, finalArgs)
  }
}
let funcB = sayName.tinyBind(fizz)
funcB(25)

let test = new funcB(26)

// console.log(test);