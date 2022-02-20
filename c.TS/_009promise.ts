// 同步
function add(a: number, b: number): number {
    return a + b
}
console.log(add(2, 3))

console.log('\n')
console.log('============= Callback =============')

// 异步回调 回调函数噩梦
// function add1(a: number, b: number,
//     callback: (res: number) => void): void {
//     setTimeout(() => [
//         callback(a + b)
//     ], 1000)
// }

// add1(2, 3, res => {
//     console.log('Callback', '2+3', res)
//     add1(res, 4, res2 => {
//         console.log('Callback', '2+3+4', res2)
//     })
// })


console.log('\n')
console.log('============= Promise =============')


// Promise
function add2(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if (b % 17 === 0) {
            reject(`bad number: ${b}`)
        }
        setTimeout(() => [
            resolve(a + b)
        ], 500)
    })
}
add2(2, 3).then(res => {
    console.log('Promise', '2+3', res)
    return add2(res, 4)
}).then(res => {
    console.log('Promise', '2+3+17', res)
    return add2(res, 17)
}).then(res => {
    console.log('Promise', '2+3+4+5', res)
    // return add2(res, 5)
}).catch(err => {
    console.log('caught error', err)
})

add2(2, 3)
    .then(res => add2(res, 4))
    .then(res => add2(res, 5))
    .then(res => add2(res, 6))
    .then(res => {
        console.log(res)
    })

function add3(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => [
            resolve(a + b)
        ], 3000)
    })
}
function mul3(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => [
            resolve(a * b)
        ], 3000)
    })
}
// (2+3)*4+5 Promise串行
add3(2, 3)
    .then(res => {
        console.log('Multiple Promise  2+3', res)
        return mul3(res, 4)
    }).then(res => {
        console.log('Multiple Promise (2+3)*4', res)
        return add3(res, 5)
    }).then(res => {
        console.log('Multiple Promise final result (2+3)*4 + 5', res)
    }).catch(err => {
        console.log('caught error', err)
    })


Promise.all([add3(2, 3), add3(4, 5)]).then(([a, b]) => {
    // 同时执行
    // const [a, b] = res
    // 将多个返回值直接写在lambad函数前面
    return mul3(a, b)
}).then(res => {
    console.log('Parallel Multiple Promise result (2+3)*(4+5)', res)
})

// (2+3)*(4+5) Promise并行 只要有一个完成就结束了
Promise.race([add3(2, 3), add3(4, 5)]).then(res => {
    console.log('Race Multiple Promise result (2+3) or (4+5)', res)
})

console.log('\n')
console.log('============= async/await 语法糖 =============')

// (2+3)*(4+5) Promise行 全部做完
async function _009calc() {
    try {
        // 串行
        // const a = await add3(2, 3)
        const a = await add2(2, 3)
        console.log('await 2+3', a)
        // const a = await add3(4, 17)
        const b = await add2(4, 17)
        console.log('await 4+17', b)
        return await mul3(a, b)
    } catch (err) {
        console.log('caught err', err)
        return undefined
    }
}
_009calc().then(res => {
    console.log('await (2+3)*(4+5)', res)
})

async function _009calc1() {
    try {
        // 并行
        const [a, b] = await Promise.all([add3(2, 3), add3(4, 5)])
        console.log('await 2+3', a)
        console.log('await 4+17', b)
        return await mul3(a, b)
    } catch (err) {
        console.log('caught err', err)
        return undefined
    }
}
_009calc1().then(res => {
    console.log('await (2+3)*(4+5)', res)
})