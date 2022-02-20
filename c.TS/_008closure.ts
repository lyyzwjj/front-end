// 闭包

console.log('============= 函数的参数和返回值都是函数 =============')

function _008createComparer(p: { smallerFirst: boolean }) {
    return p.smallerFirst ? (a: number, b: number) => a - b : (a: number, b: number) => b - a
    return (a: number, b: number) => a - b
}

function loggingComparer(
    logger: (a: number, b: number) => void,
    comp: (a: number, b: number) => number) {
    return (a: number, b: number) => {
        logger(a, b)
        return comp(a, b)
    }
}
// 将compCount 从全局变量移动到局部变量 函数调用不会对全局变量产生影响
// 实际开发 按钮等 的状态不能定义成全局变量 
function processArray(a: number[]) {
    let compCount = 0
    // logger函数携带着自由变量compCount称之为闭包
    // 如果将logger 传出去使用 那么本函数内的compCount使用范围能超越本函数
    // compCount声明周期等于花括号内 + logger函数
    const logger = (a: number, b: number) => {
        console.log('comparing', a, b)
        compCount++ //自由变量  
    }
    const comp = _008createComparer({ smallerFirst: true })
    a.sort(loggingComparer(logger, comp))
    return compCount
}

let _008a = [5, 2, 1, 6, 8, 10, 5, 25, 16, 23, 11]
let compareCount = processArray(_008a)
let compareCount1 = processArray(_008a)
console.log(_008a)
console.log('compare count', compareCount, compareCount1)


console.log('\n')
console.log('============= 部分应用函数 =============')


function isGoodNumber(goodFactor: number, v: number) {
    return v % goodFactor === 0
}
// 包装一下数组的filter
function filterArray(a: number[], f: (v: number) => boolean) {
    return a.filter(f)
}

// config
const GOOD_FACTOR = 2
// end config

const _008a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(filterArray(_008a1, (v) => isGoodNumber(GOOD_FACTOR, v)))


// 我手里有一个两个入参的函数 但是第三方的的方法的参数是 只需要一个参数的函数
// 那么我通过闭包将一个变量提前定义好 固定好 最好是 const  再返回只有一个参数的函数

function partiallyApply(
    f: (a: number, b: number) => boolean,
    a: number) {
    return (b: number) => {
        return f(a, b) // a: 自由变量 a是花括号外部传入 那么它会将外部的a打包进这个新函数 闭包
    }
}
// 将两个参数的函数isGoodNumber  包装成只有一个参数的 函数
console.log(filterArray(_008a1, partiallyApply(isGoodNumber, GOOD_FACTOR)))

console.log(_008a1.filter(partiallyApply(isGoodNumber, GOOD_FACTOR)))
