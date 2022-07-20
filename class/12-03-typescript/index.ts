/*
// 타입 추론
// let aaa = "안녕하세요";     //ERROR
// aaa = 3;        //ERROR

//타입명시
let bbb: string = "반갑습니다";
// bbb = 3; //ERROR

//타입명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원";

// 숫자타입
let ddd: number = 123;
// ddd = "철수";       //ERROR

//boolean타입
let eee: boolean = true;
eee = false;
// eee = "false"  -> JS에서는 가능. 하지만 boolean이 아닌 string 타입의 "false"가 대입되고 true로 작동함.

//배열타입
// let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];      //ERROR
// let ggg: string[] = ["철수", "영희", "훈이", 123];      //ERROR
let zzz = ["철수", "영희", "훈이", 123]; //(string | number)[] 타입으로 추론됨.

//객체타입
interface Iprofile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; //아래처럼 profile.hobby해서 못 넣음. 있을 수도 있고 없을 수도 있다의 의미인 ? 를 붙여준다.
}

const profile: Iprofile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};
profile.age = "8살";
profile.hobby = "자전거타기"; // 이렇게 따로 hobby는 못 넣음.

//함수타입 - 아래 두 개 같음
// const add = (money1: any, money2: number, unit: string) => {
//   return money1 + money2 + unit;
// };
const add = (money1: any, money2: number, unit: string): string => {
  return money1 + money2 + unit;
};

const result = add("철수", 2000, "원"); //money1은 default로 any로 지정해줬기 때문에 string, number상관없이 다 저장 가능.
*/
