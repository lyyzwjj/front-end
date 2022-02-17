// let 变量 可变
// const 常量 不可变 尽可能使用const
const c = 123
// c = 456 报错

// 限制类型定义变量
let str: string
const cc: number = 456

// 基础类型
let anExampleVariable: string = 'Hello World'
let anExampleNum: number = 123
anExampleNum = 123.456
let anExampleBool: boolean = true
console.log(anExampleVariable, anExampleNum, anExampleBool)

// literal type 枚举
// let answer: 'yes'|'no'|'maybe' = 'cc' 报错
let answer: 'yes' | 'no' | 'maybe' = 'maybe'
answer = 'yes'
let s: string = answer //从枚举转到string
console.log(typeof s)
// answer = s  //不能从string转回枚举
let httpStatus: 200 | 404 | 500 = 200
httpStatus = 500
// let httpStatus: 200 | 404 | 500 | '200' | '404' | '500'
// let h:string = httpStatus //不可直接转string
// let httpStatus: 200 | 404 | 500 | '200' | '404' | '500' = '500'
// let h:string = httpStatus //可直接转string


// union of types 类型的并集是新一种类型
function f(h: 200 | 404 | 500 | '200' | '404' | '500') {
    let status: string | number = h
}



// 动态类型
// any 任何类型 等同于 javascript
let a: any = 'abc'
a = 123
a = {}
a.name = 'John'
console.log(a.salary)

// undefined类型
let b: undefined // 只有一种值 不能变更
console.log(b)
// b = 123   // 报错
// b = 'abc' // 报错

let answer1: 'yes' | 'no' | 'maybe' | undefined