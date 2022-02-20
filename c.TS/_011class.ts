// 类
class _011Employee {
    // 公开
    name: string
    salary: number
    // 私有
    private bonus1: number = 0
    constructor(name: string, salary: number) {
        this.name = name
        this.salary = salary
    }
    updateSalary() {
    }
}
// 简化定义
class _011Employee1 {
    private allocatedBonus?: number
    // 加了public 就等于 this.name = name this.salary = salary
    constructor(public name: string, public salary: number) { }
    updateBonus() {
        if (!this.allocatedBonus) {
            this.allocatedBonus = 20000
        }
    }
    // getter/setter  虽然是接口但堆外就是个属性
    set bonus(v: number) {
        this.allocatedBonus = v
    }
    get bonus() {
        // allocatedBonus 是可能为undefined
        return this.allocatedBonus || 0
    }
}
const _011emp1 = new _011Employee1('john', 8000)
// bonus 当做一个属性
_011emp1.bonus = 20000
console.log(_011emp1)
console.log(_011emp1.bonus)

const _011emp2 = {
    name: 'mary',
    // 普通对象类型也可以用 get set
    get bouns1() {
        return 123
    }
}

console.log('\n')
console.log('============= 类的继承  =============')

class _011Manager extends _011Employee1 {
    private reporters: _011Employee1[]

    // constructor(public name: string,public salary: number) {
    // 如果这里加public 相当于_011Manager类中也加了name salary属性
    // 和_011Employee1中的冲突
    constructor(name: string, salary: number) {
        super(name, salary)
        this.reporters = []
    }
    addReporter(e: _011Employee1) {
        this.reporters.push(e)
    }
}
const manager1 = new _011Manager('mary', 18000)
manager1.addReporter(_011emp1)
manager1.bonus = 50000
console.log(manager1)

interface _011EmployeeInterface {
    name: string
    salary: number
    bonus: number
}

// 隐式实现
// _011Employee1 已经自动实现了_011EmployeeInterface接口
// 一个个对比属性
const _011emplImpl = new _011Employee1('john', 8000)
const _011emp3: _011EmployeeInterface = _011emplImpl
const _011managerImpl = new _011Manager('mary', 18000)
const _011emp4: _011EmployeeInterface = _011managerImpl

// 显示实现
// 也可以很传统的写 implements
class _011Employee2 implements _011EmployeeInterface {
    private allocatedBonus?: number
    // 加了public 就等于 this.name = name this.salary = salary
    constructor(public name: string, public salary: number) { }
    updateBonus() {
        if (!this.allocatedBonus) {
            this.allocatedBonus = 20000
        }
    }
    // getter/setter  虽然是接口但堆外就是个属性
    set bonus(v: number) {
        this.allocatedBonus = v
    }
    get bonus() {
        // allocatedBonus 是可能为undefined
        return this.allocatedBonus || 0
    }
}

console.log('\n')
console.log('============= 隐式实现和显示实现的抉择  =============')
// 定义者 = 使用者 隐式实现 推荐
// 定义者 = 实现者 显示实现 不推荐
// 接口的定义应该是使用时候才定义的 而非一开始定义好的

// service.ts
// 定义接口
// 具体页面具体方法没必要搞很大的接口 也没人用
interface Service {
    login(): void
    getTrips(): string
    getLic(): string
    startTrip(): void
    updateLic(lic: string): void
}

// 实现接口
// class RPCService implements Service {
// 让RPCService 隐式实现多个接口 LoginService TripsService等等
class RPCService {
    login(): void {
        throw new Error("Method not implemented.")
    }
    getTrips(): string {
        throw new Error("Method not implemented.")
    }
    getLic(): string {
        throw new Error("Method not implemented.")
    }
    startTrip(): void {
        throw new Error("Method not implemented.")
    }
    updateLic(lic: string): void {
        throw new Error("Method not implemented.")
    }
}

// login page
// file: login.ts

// 定义小接口
interface LoginService {
    login(): void
}
// 具体页面具体方法没必要搞很大的接口
const page = {
    // service: new RPCService() as Service,
    service: new RPCService() as LoginService,
    onLoginButtonClicked() {
        // 使用接口
        this.service.login()
    }
}