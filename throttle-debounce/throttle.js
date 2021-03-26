/*
 * @Author: imthelin
 * @since: 2021-03-25 19:24:30
 * @lastTime: 2021-03-25 19:58:29
 * @LastAuthor: Do not edit
 * @FilePath: /utils/throttle-debounce/throttle.js
 * @Description: 单位时间内多次触发，只有一次生效，类似按键子弹射击
 */

function throttle(fn, interval) {
  let timer
  let lastTime
  return function () {
    let self = this
    let args = arguments
    let now = +new Date()
    if (lastTime && lastTime + delay > now) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        lastTime = now
        fn.apply(self, args)
      }, interval);
    } else {
      lastTime = now
      fn.apply(self, args)
    }
  }
}

let biu = function () {
  console.log('biu biu biu',new Date().Format('HH:mm:ss'))
}

let theTh = throttle(biu, 2000)