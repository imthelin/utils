/*
 * @Author: imthelin
 * @since: 2021-04-02 15:02:55
 * @lastTime: 2021-04-02 17:16:27
 * @LastAuthor: Do not edit
 * @FilePath: /utils/offer/noName/index.js
 * @Description:
 */
/* 
1. 数组乱序 [0, 1, 2,..., 9]
解法：
  a.利用数组的 sort 的 compare 自定义，通过 Math.random 返回的随机数是否和 0.5 的关系去做条件
 */
function randomArr(max) {
  let genArr = []
  for (let i = 0; i <= max; i++) {
    genArr.push(i)
  }
  let resArr
  resArr = genArr.sort((a, b) => {
    const r = Math.random()
    return r > 0.5 ? a - b : b - a
  })
  return resArr
}
/*
2. 计算 1 - 10000 出现的 0 次数
思路：
  a. 视为字符串拼凑起来，再根据 split 分割目标符号,再取数组长度就代表了这个符号的出现次数。
  b. 视为字符串拼凑起来，再根据 split('')切割成单数字数组，for 循环判断目标，遇到目标，记录 +1，问题是循环次数太大了。
 */
function getTimes(max, aimStr) {
  let genArr = []
  for (let i = 0; i <= max; i++) {
    genArr.push(i)
  }
  const genStr = genArr.join('')
  // 01234567891011
  return genStr.split(aimStr).length - 1
}
/*
3. 统计某个范围内具有连续数字出现的次数 比如 1 - 1000 11、22、211、255 都算
思路: 关键在于每个数字判断， 数字转字符串然后 split('') 得到数组
  a. 栈，弹出后和最上一帧对比，相等的话证明是目标数字
  b. 队列，也就是 shift 弹出元素和元素头部对比
  这两种思路都是耗尽整个数组位置，在这期间是否出现了相邻且相等的情况
 */
function getRepeatNum(max) {
  let genArr = []
  for (let i = 0; i <= max; i++) {
    genArr.push(i)
  }
  let i = 0
  genArr.forEach(num => {
    hasRepeat(num) && i++
  })
  function hasRepeat(num) {
    let arr = String(num).split('')
    let isRepeat = false
    while (arr.length > 1) {
      let lastKey = arr.pop()
      let newLastKey = arr[arr.length - 1]
      if (lastKey === newLastKey) {
        isRepeat = true
        return isRepeat
      }
    }
    return isRepeat
  }
  return i
}
/*
4. 如何去除一个数组中相邻重复的元素[1, 1, 2, 1, 3, 2, 3, 3] -> [1, 2, 1, 3, 2, 3]
思路： 还是用数组去做，大部分的题目都是转数组，再使用数组的栈（pop）和队列(shift)思想去做
  a. 栈，pop 弹出最后元素和最上面一帧对比，相等则不推入新数组，更新循环，继续弹
  b. 队列，shift 首个，判断队列头部是否和他相等，相等不推入，继续排队，不断更新头部
 */
function superArr(arr) {
  let resArr = []
  while (arr.length !== 0) {
    let poper = arr.pop()
    if (poper !== arr[arr.length - 1]) {
      resArr.unshift(poper)
    }
  }
  console.log(resArr);
}
superArr([1,1,2,1,3,2,3,3])