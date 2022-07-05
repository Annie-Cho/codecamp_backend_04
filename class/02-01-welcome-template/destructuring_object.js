const aaa = {
    apple: 3, 
    banana: 10, 
    money: 1000
}
// undefined
const apple = aaa.apple
// undefined
apple
// 3
const { banana, money } = aaa
// undefined
banana
// 10
money
// 1000
const { name, age } = { name: "철수", age: 12 }
// undefined
name
// '철수'
age
// 12
// const { name2, age } = { name: "철수", age: 12 }
// undefined
name2
// undefined
age
// 12
// const { name, age } = { name: "철수", age: 12 }
// undefined
//오른쪽 name과 age는 고유한 key값이기 때문에 앞에 받는 쪽에서 위치가 변경되어도 이름만 같으면 상관없음
// undefined
// const { age, name } = { name: "철수", age: 12 }
// undefined
age
// 12
name
'철수'