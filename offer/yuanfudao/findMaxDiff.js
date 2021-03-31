/*
 * @Author: imthelin
 * @since: 2021-03-31 13:23:29
 * @lastTime: 2021-03-31 13:35:50
 * @LastAuthor: Do not edit
 * @FilePath: /utils/offer/yuanfudao/findMaxDiff.js
 * @Description: 
 */

let arr = [12, 13, 0, 38, 98, 101]

// 101

function findMaxDiff(arr) {
  let res = 0
  const theLength = arr.length
  let startId = 0, endId = theLength - -1
  while (startId < endId && startId < theLength) {
    let newDiff = arr[endId] - arr[startId]
    if (newDiff > res) {
      res = newDiff
    }
    if (endId === startId + 1) {
      endId = theLength - 1
      startId++
    } else {
      endId--
    }
  }
  return res
}

let result = findMaxDiff(arr)
console.log(result);