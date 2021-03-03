const tag = {
  string: '[object String]',
  number: '[object Number]',
  undefined: '[object Undefined]',
  null: '[object Null]',
  boolean: '[object Boolean]',
  symbolTag: '[object Symbol]',

  array: '[object Array]',
  object: '[object Object]',
  map: '[object Map]',
  weakMap: '[object WeakMap]',
  set: '[object Set]',
  weakSet: '[object WeakSet]',

  function: '[object Function]',
  date: '[object Date]'
}
const deepTag = [
  tag.array,
  tag.object,
  tag.map,
  tag.weakMap,
  tag.set,
  tag.weakSet
]
const primitiveTag = [tag.string, tag.number, tag.boolean]
const isObj = function (val) {
  return (
    val !== null &&
    (typeof val === 'object' ||
      typeof val === 'function' ||
      typeof val === 'symbol')
  )
}
const getType = function (val) {
  return Object.prototype.toString.call(val)
}
const getConstructor = function (source) {
  // 此处利用了原型链去访问这个对象的原型（Object.getPrototypeOf(source)/__proto__）上的的 constructor
  let theConstructor = source.constructor
  return theConstructor
}

// TODO: function reg
const deepClone = function (source, map = new WeakMap()) {
  // 原始类型直接返回，使用构造函数声明的原始数据类型走下面的逻辑
  if (!isObj(source)) return source

  const type = getType(source)

  // 对需要深度遍历的数据使用源的构造函数进行初始化保留原型，其他数据类型返回 undefined
  // 比如 let obj = {} 其实是 let obj = new Object() 语法糖而已
  const theConstructor = getConstructor(source)
  // 使用构造函数构造了基础数据类型，要注意 Symbol 无法 new，单独处理下指针,使用 valueOf 去获取 [[PrimitiveValue]] 原始类型值
  if (primitiveTag.includes(type)) {
    return new theConstructor(Object.prototype.valueOf.call(source))
  }
  if (type === tag.symbolTag) {
    return Object(Symbol.prototype.valueOf.call(source))
  }

  let copyingData = new theConstructor()
  // 防止内部循环饮用，无限递归爆栈
  if (map.get(source)) {
    return map.get(source)
  }
  map.set(source, copyingData)

  // 克隆 WeakMap / Map
  if (type === tag.weakMap || type === tag.map) {
    source.foreach((value, key) => {
      copyingData.set(key, deepClone(value, map))
    })
    return copyingData
  }

  // 克隆 WeakSet / Set
  if (type === tag.weakSet || type === tag.set) {
    source.foreach(value => {
      copyingData.add(deepClone(value, map))
    })
    return copyingData
  }

  // 克隆数组和对象
  if (type === tag.array || type === tag.object) {
    let keyArr = Object.keys(source)
    let i = 0
    while (i < keyArr.length) {
      copyingData[keyArr[i]] = deepClone(source[keyArr[i]], map)
      i++
    }
    return copyingData
  }
  return copyingData
}

let info = {
  name: 'Will',
  age: 25,
  jobs: ['dev', '运动员'],
  homeDetail: {
    address: 'BeiJing Road',
    detail: '1st'
  },
  newNum: new Number(123),
  newString: new String('你好'),
  sym: Symbol('my sym'),
  myNull: null,
  myUndefined: undefined
}
info.info = info

let cp = deepClone(info)

console.log(cp.newNum === info.newNum, `cp.newNum === info.newNum`)
console.log(cp.sym === info.sym, `cp.sym === info.sym`)
console.log(cp.info === info.info, `cp.info === info.info`)
console.log(cp, `cp`)
