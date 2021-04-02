/*
 * @Author: imthelin
 * @since: 2021-04-02 15:02:55
 * @lastTime: 2021-04-02 17:02:11
 * @LastAuthor: Do not edit
 * @FilePath: /utils/offer/noName/index.js
 * @Description:
 */

// 1. 数组乱序 [0, 1, 2,..., 9]
// 解法：利用数组的 sort 的 compare 自定义，通过 Math.random 返回的随机数是否和 0.5 的关系去做条件
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
思路：字符串拼凑起来，再根据 split 分割目标符号；也可以再全部切割成单数字数组，for 循环判断目标增加数字即可，问题是循环次数太大了
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
思路: 关键在于每个数字判断，把它组成数组，看做栈，弹出后和最上一帧对比，相等的话证明是目标数字
用队列也可以做，也就是 shift 弹出元素和元素头部对比
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