console.log('\n')
console.log('============= 自动推断返回值 =============')
function add0(a: number, b: number) {
    return a + b // 自动推断返回值
}
console.log(add0(2, 3))

console.log('\n')
console.log('============= 显示返回值 =============')
function add1(a: number, b: number): number { //显示返回值
    return a + b
}
console.log(add1(2, 3))

console.log('\n')
console.log('============= 可选参数 =============')
function add2(a: number, b: number, c?: number): number { //c? 可选参数 可加可不加
    return a + b
}
console.log(add2(2, 3))
console.log(add2(2, 3, 4))

function add3(a: number, b: number, c?: number): number { //c? 可选参数 可加可不加
    // c 可能为undefined
    // if (c) {
    //     return a + b + c
    // } else {
    //     return a + b
    // }
    // return c ? a + b + c : a + b
    return a + b + (c || 0)
}
console.log(add3(2, 3))
console.log(add3(2, 3, 4))

console.log('\n')
console.log('============= 默认值参数 =============')

function add4(a: number, b: number, c?: number, d: number = 0): number { // 默认值参数 
    return a + b + (c || 0) + d
}
console.log(add4(2, 3))
console.log(add4(2, 3, 4))
console.log(add4(2, 3, 4, 5))

console.log('\n')
console.log('============= 可变参数 =============')

function add5(a: number, b: number, c?: number, d: number = 0, ...e: number[]): number { // 可变参数
    let sum = a + b + (c || 0) + d
    for (let i = 0; i < e.length; i++) {
        sum += e[i]
    }
    return sum
}

console.log(add5(2, 3))
console.log(add5(2, 3, 4))
console.log(add5(2, 3, 4, 5, 6))
console.log(add5(2, 3, 4, 5, 6, 7, 8))
console.log('============= 可变参数 数组传参自动拆包 =============')
const numbers = [6, 7, 8, 9, 10]
console.log(add5(2, 3, 4, 5, ...numbers))
console.log('\n')

console.log('============= 函数重载 =============')

function acrl(a: number, b: number): number
function acrl(a: number, b: number, ...e: number[]): number

function acrl(a: number, b: number, c?: number, d: number = 0, ...e: number[]): number {
    let sum = a + b + (c || 0) + d
    for (let i = 0; i < e.length; i++) {
        sum += e[i]
    }
    return sum
}

console.log(acrl(2, 3))
console.log(acrl(2, 3, 4))
console.log(acrl(2, 3, 4, 5, 6))
const numbers1 = [6, 7, 8, 9, 10]
console.log(acrl(2, 3, 4, 5, ...numbers1))