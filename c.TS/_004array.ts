let _004a: number[] = [1, 2, 3, 4]
let _004b: string[] = ['a', 'b', 'c']
// 超过索引边界取值也不报错 打印undefined
console.log(_004a[3], _004b[-1], _004b[3])
for (let i = 0; i < _004a.length; i++) {
    console.log(_004a[i])
}
/* if 
1、对象， 只要这个对象不为null，就会被计算为 true
2、Undefined， 也会被计算为 false
3、null ，会被计算为 false
4、布尔值， 被计算为布尔的值
5、数字， 如果是 +0，-0， NaN，则会被计算为 false ，否则为 true
6、字符串， 如果是空字符串 ”“ ，为 false，否则为 true
*/
if (_004a) {
    console.log('a is not empty')
} else {
    console.log('a is empty')
}

// let empty_array = [] 实际定义的如下 any类型数组
// let empty_array: any[] = []  
// let empty_array: number[] = []
const empty_array: number[] = [] // const常量


// 判断空数组的方式 必须判断长度是否是0
if (empty_array.length !== 0) {
    console.log('a is not empty')
} else {
    console.log('a is empty')
}

// 数组加到最右边 
// 数组添加 从右边添加
empty_array.push(1)
empty_array.push(2)
empty_array.push(3) // 1,2,3
// 数组添加 从左边添加
empty_array.unshift(4) // 4,1,2,3
// 数组删除 从右边拿掉
empty_array.pop()   // 4,1,2
// 数组删除 从左边拿掉
empty_array.shift() // 1,2

empty_array.push(5) // 1,2,5
console.log(empty_array)

// 子数组
_004a = [0, 1, 2, 3, 4, 5, 6, 7]
console.log(_004a.slice(2, 5)) // [ 2, 3, 4 ]
console.log(_004a.slice(5, 10)) // [ 5, 6, 7 ] 取不到了就没有了 也不报错

// 删除子数组

_004a.splice(3, 2) // 从索引3开始 删除2个元素
console.log(_004a) // 0,1,2,5,6,7
const deleted = _004a.splice(3, 1) // 删除的是[5] 并且是数组形式
console.log(_004a, deleted) // 0,1,2,6,7
const deleted1 = _004a.splice(2, 2, 8, 9, 10, 8) // 删除的是[2,6] 并添加 8,9,10,8 元素
console.log(_004a, deleted1) // 0,1,8,9,10,8,7

// 0,1,8,9,10,8,7
// 查找子数组 indexOf 找到第一个即返回
console.log('index of 9, ', _004a.indexOf(9)) // 3
console.log('index of 8, ', _004a.indexOf(8)) // 2
// indexOf 第二参数 从第几个开始找
console.log('index of 8, ', _004a.indexOf(8, 3)) // 5 从索引3开始找 找到索引5的8
// lastIndexOf 从后往前找
console.log('index of 8, ', _004a.lastIndexOf(8)) // 5

console.log('\n\n\n')
console.log('============= array sort =============')
_004a.sort()
console.log(_004a) //  0, 1, 10, 7, 8, 8,  9   不是数字大小排列 而是字典顺序

let _004dict = ['dog', 'cat', 'scorpion', 'pig']
_004dict.sort()
console.log(_004dict)

console.log('\n\n\n')
console.log('============= tuple =============')

// 元组 tuple
const _004c = [1, 2, 3]
const [_004c1, _004c2, _004c3, _004c4] = _004c
console.log(_004c1, _004c2, _004c3, _004c4)


console.log('\n\n\n')
console.log('============= split/join =============')
console.log('split: ', 'a,b,c,1,2,3'.split(','))
console.log('join: ', ['a', 'b', 'c', 1, 2, 3].join(' '))