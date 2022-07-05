const child = {
    name: "영희", 
    age: 7, 
    school: "토끼초등학교"
}
// undefined
const { age } = child
// undefined
console.log(age)
// VM2698:1 7
// undefined
function getChild() {
    return {
        name: "철수",  
        age: 13, 
        school: "다람쥐초등학교"
    }
}
// undefined
const { school } = getChild()
// undefined
school
// '다람쥐초등학교'
console.log(school)
// VM3104:1 다람쥐초등학교
// undefined
function getClassmates() {
    return {
        child1: "영희", 
        child2: "철수"
    }
}
// undefined
function getClassmates2() {
    return ["영희", "철수"]
}
// undefined
const [ child1, child2 ] = getClassmates2()
// undefined
console.log(child1)
// VM3623:1 영희
// undefined
console.log(child2)
// VM3687:1 철수
// undefined
function getClassmates(child1, child2) {
    return [child2, child1]
}
// undefined
// const [ child1, child2 ] = getClassmates("훈이", "맹구")
// undefined
console.log(child1)
// VM4084:1 맹구
// undefined
console.log(child2)
// VM4169:1 훈이
// undefined