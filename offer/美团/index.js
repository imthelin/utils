/*
 * @Author: imthelin
 * @since: 2021-04-02 17:18:11
 * @lastTime: 2021-04-02 17:48:50
 * @LastAuthor: Do not edit
 * @FilePath: /utils/offer/美团/index.js
 * @Description:
 */

/*
判断字符串是闭合的 '{}[]()'
'[{}]' true
'[{]' false
'[{' false
'}{[]' false
'[{]}' false
*/

function isClosure(str) {
  const a = {
      left: '{',
      right: '}',
  }
  const b = {
    left: '(',
    right: ')',
  }
  const c = {
    left: '[',
    right: ']',
  }
  let arr = str.split('')
  let arrT = []
  let res = true
  while (arr.length > 0) {
    let shiftEr = arr.shift()
    if (shiftEr === a.left || shiftEr === b.left || shiftEr === c.left) {
      arrT.push(shiftEr)
    }
    if (shiftEr === a.right || shiftEr === b.right || shiftEr === c.right) {
      // console.log(shiftEr, arrT);
      // arrT 栈顶必须是它的启动符号，否则就是闭合失败了
      if (shiftEr === a.right) {
        res = arrT[arrT.length - 1] === a.left
        return res
      } else if (shiftEr === b.right) {
        res = arrT[arrT.length - 1] === b.left
        return res
      } else if (shiftEr === c.right) {
        res = arrT[arrT.length - 1] !== c.left
        return res
      }
    }
  }
  return res
}

console.log(isClosure('}{[]'));