/*
 * @Author: imthelin
 * @since: 2021-03-31 12:37:46
 * @lastTime: 2021-03-31 12:55:42
 * @LastAuthor: Do not edit
 * @FilePath: /utils/test.js
 * @Description: 
 */
let arrT = [
  {
    id: 0,
    name: 'ha',
    score: 31,
    children: [
      {
        id: 2,
        name: 'ha1',
        score: 91,
        children: []
      }
    ]
  },
  {
    id: 1,
    name: 'afgd',
    score: 89,
    children: [
      {
        id: 4,
        name: 'rar',
        score: 91,
        children: []
      }
    ]
  },
  {
    id: 9,
    name: 'ha',
    score: 91,
    children: [
      {
        id: 4,
        name: 'ha1',
        score: 93,
        children: []
      }
    ]
  }
]

function findItem(arr) {
  let obj = arr.find(item => isAim(item))
  if (!obj) {
    for (const item of arr) {
      if (Array.isArray(item.children) && item.children.length !== 0) {
        obj = findItem(item.children)
        if(obj) return obj
      }
    }
  }
  return obj
}
function isAim(item) {
  let b = (item.name === 'ha' && item.score > 90)
  return b
}

let obj = findItem(arrT)
console.log(obj);