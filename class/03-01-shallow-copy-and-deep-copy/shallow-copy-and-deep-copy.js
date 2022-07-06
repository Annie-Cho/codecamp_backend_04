/* 숫자, 문자열, boolean값은 복사가 잘 이루어지지만 배열, 객체는 복사가 제대로 이루어지지 않는 것을 확인함. */
let aaa = "철수"
// undefined
let bbb = aaa
// undefined
console.log(bbb)
// VM230:1 철수
// undefined
console.log(aaa)
// VM302:1 철수
// undefined
bbb = "영희"
// '영희'
console.log(bbb)
// VM417:1 영희
// undefined
console.log(aaa)
// VM425:1 철수
// undefined
let profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined
let profile2 = profile
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile2
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile2.name = "영희"
// '영희'
profile2
// {name: '영희', age: 12, school: '다람쥐초등학교'}
profile
// {name: '영희', age: 12, school: '다람쥐초등학교'}
//string같은 객체는 복사가 바로 되지만 객체, 배열은 복사가 안된다. -> 사본을 수정하면 원본도 수정이 된다
//boolean, 숫자는 복사가 잘 된다. 객체와 배열은 복사가 안된다.
//객체와 배열에는 주소값이 저장되어 있다. 값이 저장된 것이 아니라 주소값이 저장된 것이다.



/* 얕은 복사 (Shallow copy) */
// let profile = {
//     name : "철수",
//     age : 12,
//     school : "다람쥐초등학교"
// }
// undefined
let profile2 = {
    name: profile.name,
    age: profile.age,
    school: profile.school
}
// undefined
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile2
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile2.name = "영희"
// '영희'
profile2
// {name: '영희', age: 12, school: '다람쥐초등학교'}
profile
// {name: '철수', age: 12, school: '다람쥐초등학교'}
//스프래드 연산자 -> ...profile
// undefined
let profile3 = {...profile}
// undefined
profile.name = "영희"
// '영희'
profile3
// {name: '철수', age: 12, school: '다람쥐초등학교'}
profile
// {name: '영희', age: 12, school: '다람쥐초등학교'}
profile3.name = "영희"
// '영희'
let profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교", 
    hobby: {
        hobby1: "수영",
        hobby2: "자전거"
    }
}
// undefined
let profile5 = {...profile }
// undefined
profile5
// {name: '철수', age: 12, school: '다람쥐초등학교', hobby: {…}}age: 12hobby: {hobby1: '수영', hobby2: '자전거'}name: "철수"school: "다람쥐초등학교"[[Prototype]]: Object
profile.name = "영희"
// '영희'
profile
// {name: '영희', age: 12, school: '다람쥐초등학교', hobby: {…}}age: 12hobby: {hobby1: '수영', hobby2: '자전거'}name: "영희"school: "다람쥐초등학교"[[Prototype]]: Object
profile5
// {name: '철수', age: 12, school: '다람쥐초등학교', hobby: {…}}age: 12hobby: {hobby1: '수영', hobby2: '자전거'}name: "철수"school: "다람쥐초등학교"[[Prototype]]: Object
profile5.hobby.hobby1 = "잠자기"
// '잠자기'
profile5
// {name: '철수', age: 12, school: '다람쥐초등학교', hobby: {…}}age: 12hobby: {hobby1: '잠자기', hobby2: '자전거'}name: "철수"school: "다람쥐초등학교"[[Prototype]]: Object
profile
// {name: '영희', age: 12, school: '다람쥐초등학교', hobby: {…}}age: 12hobby: hobby1: "잠자기"hobby2: "자전거"[[Prototype]]: Objectname: "영희"school: "다람쥐초등학교"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()length: 1name: "set __proto__"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]
/*let profile5 = {
    name: profile.name,
    age: profile.age,
    school: profile.school,
    hobby: {
        hobby1: profile.hobby.hobby1,
        hobby2: profile.hobby.hobby2
    } //-> ///hobby: {... profile.hobby}
}*/
// undefined
let profile5 = {
    ...profile,
    hobby: {...profile.hobby }
}
// undefined


/* 깊은 복사 */
//지금은 문자열로 만드는 것. 이걸 새로운 객체로 가져감. 깊은 복사 <- 현재 안돼서 수업 넘어감
profile
// {name: '영희', age: 12, school: '다람쥐초등학교', hobby: {…}}
JSON.stringify(profile)
// '{"name":"영희","age":12,"school":"다람쥐초등학교","hobby":{"hobby1":"잠자기","hobby2":"자전거"}}'
JSON.parse('{"name":"영희","age":12,"school":"다람쥐초등학교","hobby":{"hobby1":"잠자기","hobby2":"자전거"}}')
// {name: '영희', age: 12, school: '다람쥐초등학교', hobby: {…}}
//기존과는 아예 다른 곳
// undefined
JSON.parse(JSON.stringify(profile))
// {name: '영희', age: 12, school: '다람쥐초등학교', hobby: {…}}
//깊은 복사
//다 새로운 주소가 할당됨