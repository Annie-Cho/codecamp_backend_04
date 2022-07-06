const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}
// undefined
profile.name = "영희"
// '영희'
/* 여기서 말하는 const 는 profile에 들어가있는 값을 바꿀 수 없다! => 즉, profile에는 주소값이 들어있으므로 주소를 바꿀 수 없다. */
// undefined
profile.friend = "철수"
// '철수'
/* profile 안의 주소를 지우고 3을 집어넣던지, '사과'같은 건 못 넣는다. 다른 객체도 못 넣는다. */
// undefined
profile = 3
/*
VM7696:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9
(anonymous) @ VM7696:1
*/
profile = "사과"
/*
VM7733:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9
(anonymous) @ VM7733:1
*/
profile = {
    qqq: "딸기"
}
/*
VM7808:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:9
(anonymous) @ VM7808:1
*/
profile.age = 15
// 15
/* profile 저장 값을 바꾸는 것이 아니라 profile을 참조하고 있는 age라는 값을 변경한 것이기 때문에 profile이랑 상관없음 */
undefined


/***************************/


undefined
/* profile을 참조하고 있는 것들도 못 변경하도록 바꿔보기 */
undefined
const myProfile = Object.freeze(profile)
// undefined
myProfile
// {name: '영희', age: 15, school: '다람쥐초등학교', friend: '철수'}
myProfile.friend = "훈이"
// '훈이'
myProfile
// {name: '영희', age: 15, school: '다람쥐초등학교', friend: '철수'}
/* 위에서 마치 바뀐 것같이 입력은 되지만 myProfile을 출력해보면 반영이 안돼어있는 것을 확인할 수 있음. 이게 바로 Object.freeze() */
// undefined