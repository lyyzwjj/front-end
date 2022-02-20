// 接口只是用来描述类型的
interface Employee {
    name: string
    salary: number
    bonus?: number
    updateBonus(p: number): void
}
// _010emp1 等于匿名类实例
const _010emp1: Employee = {
    name: 'john',
    salary: 8000,
    updateBonus(p: number) {
        if (!this.bonus) {
            this.bonus = this.salary * p
        }
    }
}
const _010emp2: Employee = {
    name: '张三',
    salary: 10000,
    bonus: 20000,
    updateBonus(p: number) {
        if (!this.bonus) {
            this.bonus = this.salary * p
        }
    }
}

let _010emp3: Employee
// 接口只是用来描述一个类型 不会初始化 没有零值 undefined
// console.log(_010emp3)
// _010emp3.name

function _010updateBounus(e: Employee, p: number) {
    if (!e.bonus) {
        e.bonus = e.salary * p
    }
}

console.log('\n')
console.log('============= !/?的作用 =============')

interface Employee1 {
    name?: {
        first?: string
        last: string
    }
    salary: number
    bonus?: number
}
// 返回值 boolean | undefined 
function hasBadName(e: Employee1) {
    // ? 如果遇到空的就立即返回 undefined  不会有空指针异常
    return e.name?.first?.startsWith('AAA')
}
// 编译成
/**
    var _a, _b;
    // ? 如果遇到空的就立即返回 undefined  不会有空指针异常
    return (_b = (_a = e.name) === null || _a === void 0 ? void 0 : _a.first) === null || _b === void 0 ? void 0 : _b.startsWith('AAA');
 */

// 返回值 boolean
function hasBadName1(e: Employee1) {
    // ! 由程序员保证不会出空指针异常 强制不判断空  后果自负
    return e.name!.first!.startsWith('AAA')
}
// 编译成
// return e.name.first.startsWith('AAA');

console.log(hasBadName({
    name: {
        first: 'john',
        last: 'smith'
    },
    salary: 8000
}))

console.log('\n')
console.log('============= 接口的继承 =============')
interface Employee2 extends HasName {
    salary: number
    bonus?: number
}
interface HasName {
    name?: {
        first?: string
        last: string
    }
}

console.log('\n')
console.log('============= union of type 类型的并 / 类型断言  =============')

interface WxButton {
    visible: boolean
    enabled: boolean
    onClick(): void
}
interface WxImage {
    visible: boolean
    src: string
    width: number
    height: number
}

function processElement(e: WxButton | WxImage) {
    // e.visible 只会有WxButton和WxImage 的公共部分 visible属性
    // js 没有 instance of 语法 
    // type of 也不能判断 接口 因为js压根没有接口类型 
    // ts  interface编译成js后完全就没有
    // 强行判断类型
    // 类型断言
    // e as any | e as WxButton | e as WxImage 
    if ((e as any).onClick) { // 判断onClick存不存在而不是调用方法
        const btn = e as WxButton
        btn.onClick()
    } else {
        const img = e as WxImage
        console.log(img.src)
    }
}
processElement({
    visible: true,
    enabled: true,
    onClick() {
        console.log('clicked')
    }
})
processElement({
    visible: true,
    src: 'http://baidu.com/1.jpg',
    width: 1,
    height: 1
})

function processElement1(e: WxButton | WxImage) {
    if (isButton(e)) { // 判断onClick存不存在而不是调用方法
        e.onClick()
    } else {
        console.log(e.src)
    }
}
function isButton(e: WxButton | WxImage): e is WxButton {
    return (e as WxButton).onClick !== undefined
}

processElement1({
    visible: true,
    enabled: true,
    onClick() {
        console.log('clicked')
    }
})
processElement1({
    visible: true,
    src: 'http://baidu.com/1.jpg',
    width: 1,
    height: 1
})
