/*
 * @Author: imthelin
 * @since: 2021-03-16 23:40:07
 * @lastTime: 2021-03-25 18:59:24
 * @LastAuthor: Do not edit
 * @FilePath: /utils/throttle-debounce/debounce.js
 * @Description: 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 */

let showBox = document.getElementById('increase')

// 主要是依赖闭包特性, 能操作计时器 timer
function debounce(fn, delay) {
  let timer
  return function () {
    clearTimeout(timer)
    timer = null
    // 支持不定入参数，或者函数定义为 (...args)
    let args = [...arguments]
    let self = this
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, delay)
  }
}

function addNum(basic = 1) {
  showBox.innerHTML = Math.random() * basic
}

let debounceFn = debounce(addNum, 1000)

showBox.addEventListener('click', () => {
  debounceFn(100)
}, false)
