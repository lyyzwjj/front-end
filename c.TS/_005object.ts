// JSON JavaScript Object Notation
const emp1 = {
    name: {
        first: '三',
        last: '张'
    },
    gender: 'male' as 'male' | 'female' | 'other' | 'unknown',
    salary: 8000,
    bonus: undefined as (number | undefined),
    performance: 3.5,
    badges: ['优秀员工奖', '迟到王'],
}
if (!emp1.bonus) {
    emp1.bonus = emp1.salary * emp1.performance
}
emp1.gender = 'other'
console.log(`${emp1.name} has a salary of ${emp1.salary}`)
console.log(emp1)
const emp2 = {
    "name": {
        "first": "三",
        "last": "张"
    },
    "gender": "other",
    "salary": 8000,
    "bonus": 28000,
    "performance": 3.5,
    "badges": [
        "优秀员工奖",
        "迟到王"
    ]
}

console.log(emp2.name.first)

// JSON.stringify   对象变成字符串
// JSON.parse       字符串变成对象
const _005s: string = JSON.stringify(emp1)
console.log(_005s)
const emp3 = JSON.parse(_005s)
//  emp3 any类型
console.log(emp3.name.first)

// 不能比较对象内部属性
console.log('emp1===emp2?', emp1 === emp3)
// 只能手动比较内部属性
console.log('emp1.name.first===emp2.name.first?', emp1.name.first === emp3.name.first)