// 泛型
const _012a: Array<string> = []
// _012a.push(123)
_012a.push('123')

const _012p = new Promise<string>((resolve, reject) => {
    // resolve(122)
    resolve('122')
})

class MyArray<T>{
    data: T[] = []
    add(t: T) {
        this.data.push(t)
    }
    // MyArray<number>.map<string>(f: (v: number) => string): string[]
    map<U>(f: (v: T) => U): U[] {
        return this.data.map(f)
    }
    print() {
        console.log(this.data)
    }
}
const _012arr = new MyArray<number>()
_012arr.add(1)
_012arr.add(2000)
_012arr.add(330000)
_012arr.print()

// 可以直接指定类型U
console.log(_012arr.map<number>(v => v + 1))
// 可以让编译器自己推断类型
console.log(_012arr.map(v => v.toExponential()))


interface HasWeight {
    weight: number
}

class WeightNumber {
    constructor(public weight: number) { }
}

class MyWeightArray<T extends HasWeight>{
    data: T[] = []
    add(t: T) {
        this.data.push(t)
    }
    // MyArray<number>.map<string>(f: (v: number) => string): string[]
    map<U>(f: (v: T) => U): U[] {
        return this.data.map(f)
    }
    print() {
        console.log(this.data)
    }
    sortByWeight() {
        this.data.sort((a, b) => a.weight - b.weight)
    }
}

const _012weightArr = new MyWeightArray<WeightNumber>()
_012weightArr.add(new WeightNumber(10000))
_012weightArr.add(new WeightNumber(200))
_012weightArr.add(new WeightNumber(30000))
_012weightArr.sortByWeight()
console.log(_012weightArr)