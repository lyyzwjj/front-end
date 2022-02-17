// == 和 ===

// ==：运算符称作相等，用来检测两个操作数是否相等，这里的相等定义的非常宽松，可以允许进行类型转换
// ===：用来检测两个操作数是否严格相等

// 1、对于string,number等基础类型，==和===是有区别的
// 不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
// 同类型比较，直接进行“值”比较，两者结果一样
// 2、对于Array,Object等高级类型，==和===是没有区别的
// 3、基础类型与高级类型，==和===是有区别的
// 对于==，将高级转化为基础类型，进行“值”比较，因为类型不同，===结果为false


// 1、===：称为等同符，当两边值的类型相同时，直接比较值，若类型不相同，直接返回false；
// 2、==：称为等值符，当等号两边的类型相同时，直接比较值是否相等，若不相同，则先转化为类型相同的值，再进行比较；
// 类型转换规则：
//     1）如果等号两边是boolean、string、number三者中任意两者进行比较时，优先转换为数字进行比较。
//     2）如果等号两边出现了null或undefined,null和undefined除了和自己相等，就彼此相等
// 注意：NaN==NaN  //返回false，NaN和所有值包括自己都不相等。

// 一律使用 === 和 !== 
function processHttpStatus(s:
    200 | 404 | 500 | '200' | '404' | '500') {
    if (s === 200) {
        console.log('ok')
    } else if (s === 404) {
        console.log('not found')
    } else if (s === 500) {
        console.log('internal server error')
    } else if (s === '200') {
        console.log('ok')
    } else if (s === '404') {
        console.log('not found')
    } else if (s === '500') {
        console.log('internal server error')
    }
    // 没必要写
    //  else {
    //     console.log('unknown error')
    // }
}
processHttpStatus(200)


function processHttpStatus1(s:
    200 | 404 | 500 | '200' | '404' | '500') {
    // 把number一律转化成string
    // statusStr = s 不能直接赋值  因为是并集的类型
    // let statusStr = ''
    // if (typeof s === 'number') {
    //     statusStr = s.toString()
    // } else {
    //     statusStr = s
    // }
    // if (statusStr === '200') {
    //     console.log('ok')
    // } else if (statusStr === '404') {
    //     console.log('not found')
    // } else if (statusStr === '500') {
    //     console.log('internal server error')
    // }

    // 把string一律转化成number
    // statusStr = s 不能直接赋值  因为是并集的类型
    // let statusNum = 0
    // if (typeof s === 'string') {
    //     statusNum = parseInt(s)
    // } else {
    //     statusNum = s
    // }
    const statusNum = typeof s === 'string' ? parseInt(s) : s
    if (statusNum === 200) {
        console.log('ok')
    } else if (statusNum === 404) {
        console.log('not found')
    } else if (statusNum === 500) {
        console.log('internal server error')
    }
}

processHttpStatus1(200)
processHttpStatus1('404')

function processHttpStatus2(s:
    200 | 404 | 500 | '200' | '404' | '500') {
    const statusNum = typeof s === 'string' ? parseInt(s) : s

    switch (statusNum) {
        case 200:
            console.log('ok')
            break // 不加break会走到 404 这行打印 not found
        case 404:
            console.log('not found')
            break
        case 500:
            console.log('internal server error')
            break
        // default:  // 没必要
        //     console.log('unknown error')
        //     break
    }
    if (statusNum === 200) {
        console.log('ok')
    } else if (statusNum === 404) {
        console.log('not found')
    } else if (statusNum === 500) {
        console.log('internal server error')
    }
}

// loop 循环
let sum = 0
for (let i = 0; i < 100; i++) {
    sum += i
}
console.log(sum)
sum = 0
let i = 1
while (i <= 100) {
    sum += i
    i++
}
console.log(sum)

sum = 0
i = 1
do {
    sum += i
    i++
} while (i <= 100)
console.log(sum)


// try-catch 异常
// `` 模板字符串(Template String)是增强版的字符串，用反引号(`)标识，
// 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
// ` ` 内的内容完全保留包括 换行
sum = 0
for (let i = 0; i < 100; i++) {
    sum += i
    try {
        if (i % 17 === 0) {
            throw `bad number ${i}`
        }
    } catch (err) {
        console.error(err)
    }
}
console.log(sum)