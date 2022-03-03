function _009test(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        console.log(n * n)
        setTimeout(() => [
            resolve(n * n)
        ], 3000)
    })
}
let _009promise = _009test(2);

async function _009f1() {
    const c = await _009promise
    console.log("hahaha1", c)
}

async function _009f2() {
    const c = await _009promise
    console.log("hahaha2", c)
}
_009f1()
_009f2()
