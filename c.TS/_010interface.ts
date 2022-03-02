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


interface Constructor {
    (options: number): void
}
declare let Ccc: Constructor
var xxxx = Ccc(123)
console.log(xxxx)


/*
 
// TypeScript 接口中有很多方式来声明变量的结构。
// 以下两个是等效声明, 第一个使用内联注解，第二个使用接口：

// Sample A
declare const myPoint: { x: number; y: number };

// Sample B
interface Point {
  x: number;
  y: number;
}
declare const myPoint: Point;

*/

/*
// 示例 B 的好处在于，如果有人创建了一个基于 myPoint 的库来添加新成员, 他们可以轻松将此成员添加到 myPoint 的现有声明中:
// 因为 TypeScript 接口是开放式的，这是 TypeScript 的一个重要原则，它允许你使用接口模仿 JavaScript 的可扩展性。

// Lib a.d.ts
interface Point {
    x: number,
    y: number
  }
declare const myPoint: Point
  
// Lib b.d.ts
interface Point {
    z: number
}
  
// Your code
let myPoint.z // Allowed!

// 通过上面可以明白，接口可以增加扩展性，又不会影响到性能，所以使用接口了。
*/  

/*
// 类可以实现接口

interface Point {
  x: number;
  y: number;
}

class MyPoint implements Point {
  x: number;
  y: number; // Same as Point
}

基本上在 implements（实现） 的存在下，该外部 Point 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步：

interface Point {
  x: number;
  y: number;
  z: number; // New member
}

class MyPoint implements Point {
  // ERROR : missing member `z`
  x: number;
  y: number;
}



*/

