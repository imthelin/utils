const deepClone = function (source, map = new Map()) {
  if (!isObj(source)) return source

  let copyingData = Array.isArray(source) ? [] : {}
  if (map.get(source)) {
    return map.get(source)
  }
  map.set(source, copyingData)

  let keyArr = Object.keys(source)
  let i = 0
  while (i < keyArr.length) {
    copyingData[keyArr[i]] = deepClone(source[keyArr[i]], map)
    i++
  }
  return copyingData
}

const isObj = function (val) {
  return val !== null && (typeof val === 'object' || typeof val === 'function')
}


let info = {
  name: 'Will',
  age: 25,
  jobs: ['dev', '运动员'],
  homeDetail: {
    address: 'BeiJing Road',
    detail: '1st'
  }
}
info.info = info

let cp = deepClone(info)

console.log(cp, `cp`)