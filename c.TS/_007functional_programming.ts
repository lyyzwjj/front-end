// 函数式编程
// 函数式编程风格的定义:
// 1. 函数是一等公民
// 2. 高阶函数
// 3. 闭包
// 4. 部分应用函数



// 函数作为"一等公民":
// 变量类型可以是函数
// 值(literal)可以是函数
// 对象的字段可以是函数
// 函数的参数可以是函数
// 函数的返回值可以是函数


// function compareNumber(a: number, b: number) {
//     console.log('comparing', a, b)
//     return a - b
// }

console.log('\n')
console.log('============= 函数的参数可以是函数|值(literal)可以是函数 =============')

let compareNumber = function compareNumber(a: number, b: number) {
    console.log('comparing', a, b)
    return a - b
}


let _007a = [5, 2, 1, 6, 8, 10, 5, 25, 16, 23, 11]
_007a.sort(compareNumber)
console.log(_007a)

// lambda 表达式, javascript/typescript: 箭头函数

// lambda 表达式单行
// compareNumber = (a: number, b: number) => b - a
// _007a.sort((a: number, b: number) => b - a)

// lambda 编译器自动推断 函数类型
// _007a.sort((a, b) => b - a)

// lambda 表达式多行
_007a.sort((a, b) => {
    console.log('comparing', a, b)
    return b - a
})
console.log(_007a)



console.log('\n')
console.log('============= 对象的字段可以是函数 =============')
const _007emp = {
    name: 'john',
    salary: 8000,
    // increaseSalary(p: number) {
    //     this.salary *= p
    // }
    increaseSalary: function (p: number) {
        this.salary *= p
    }

}
_007emp.increaseSalary(1.1)
console.log(_007emp)


console.log('\n')
console.log('============= 函数的返回值可以是函数 =============')
// boolean 类型参数用对象包裹参数
function createComparer(p: { smallerFirst: boolean }) {
    return p.smallerFirst ? (a: number, b: number) => a - b : (a: number, b: number) => b - a
    return (a: number, b: number) => a - b
}
let _007a1 = [5, 2, 1, 6, 8, 10, 5, 25, 16, 23, 11]
_007a1.sort(createComparer({ smallerFirst: true }))
console.log(_007a1)
_007a1.sort(createComparer({ smallerFirst: false }))
console.log(_007a1)