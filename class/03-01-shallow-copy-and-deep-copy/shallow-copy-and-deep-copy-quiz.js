/* 얕은 복사 */
const child1 = {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교"
}
// undefined
let child2 = {...child1}
// undefined
child1
// {name: '철수', age: 13, school: '다람쥐초등학교'}
child2
// {name: '철수', age: 13, school: '다람쥐초등학교'}
child2.name = "영희"
// '영희'
child2
// {name: '영희', age: 13, school: '다람쥐초등학교'}
child1
// {name: '철수', age: 13, school: '다람쥐초등학교'}


/***************************/

/* 깊은 복사 */
undefined
// const child1 = {
//     name: {first: "김", last: "철수"},
//     age: 13,
//     shool: "다람쥐초등학교"
// }
// undefined
let child3 = JSON.parse(JSON.stringify(child1))
// undefined
child3
// {name: {…}, age: 13, shool: '다람쥐초등학교'}
child1
// {name: {…}, age: 13, shool: '다람쥐초등학교'}
child3.name.first = "최"
// '최'
child3.name.last = "영희"
// '영희'
child3
// {name: {…}, age: 13, shool: '다람쥐초등학교'}
age: 13
// name: {first: '최', last: '영희'}
shool: "다람쥐초등학교"
// [[Prototype]]: Object
child1
// {name: {…}, age: 13, shool: '다람쥐초등학교'}
age: 13
// name: {first: '김', last: '철수'}
shool: "다람쥐초등학교"
// [[Prototype]]: Object

//이렇게도 표현할 수 있지만 JSON을 사용하는 걸 추구함
const child4 = {
    ...child1,
    name: {... child1.name}
}
// undefined
child4
// {name: {…}, age: 13, shool: '다람쥐초등학교'}
// age: 13
// name: {first: '김', last: '철수'}
// shool: "다람쥐초등학교"
// [[Prototype]]: Object

/* JSON stringify를 통하여 string으로 바꿔주고 parse를 해준다 */