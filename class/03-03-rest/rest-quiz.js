const child = {
    name: "철수",
    age: 8,
    school: "다람쥐초등학교",
    money: 2000,
    hobby: "수영"
}
// undefined
const {school, ...rest} = child
// undefined
rest
// {name: '철수', age: 8, money: 2000, hobby: '수영'}
/* 정상적으로 school을 제외한 나머지 값들이 rest에 들어있는 것을 확인할 수 있음 */
// undefined