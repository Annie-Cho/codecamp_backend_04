//public, private, protected, readonly

// //1. public
class Aaa1 {
  constructor(public mypower) {
    // this.mypower = mypower;  //public, private, readonly 등 1개만 포함되면 자동으로 셋팅됨.
  }
  ggg() {
    console.log(this.mypower); //안에서 접근 가능
    this.mypower = 10; //안에서 수정 가능
  }
}

class Aaa2 extends Aaa1 {
  /* 이 부분 없으면 자동으로 한다고 보면 됨.
  constructor() {
    super();
  }
*/
  ggg() {
    console.log(this.mypower); //자식이 접근 가능
    this.mypower = 10; //자식이 수정 가능
  }
}

const aaaa = new Aaa2(50);
console.log(aaaa.mypower); //밖에서 접근 가능
aaaa.mypower = 10; //밖에서 수정 가능

//******************************************************************************** */

//2. protected
// class Aaa1 {
//   constructor(protected mypower) {
//     // this.mypower = mypower;  //public, protected, private, readonly 등 1개만 포함되면 자동으로 셋팅됨.
//   }
//   ggg() {
//     console.log(this.mypower); //안에서 접근 가능
//     this.mypower = 10; //안에서 수정 가능
//   }
// }

// class Aaa2 extends Aaa1 {
//   /* 이 부분 없으면 자동으로 한다고 보면 됨.
//     constructor() {
//       super();
//     }
//   */
//   ggg() {
//     console.log(this.mypower); //자식이 접근 가능
//     this.mypower = 10; //자식이 수정 가능
//   }
// }

// const aaaa = new Aaa2(50);
// console.log(aaaa.mypower); //밖에서 접근 불가
// aaaa.mypower = 10; //밖에서 수정 불가

//******************************************************************************** */

//3. private
// class Aaa1 {
//   constructor(private mypower) {
//     // this.mypower = mypower;  //public, protected, private, readonly 등 1개만 포함되면 자동으로 셋팅됨.
//   }
//   ggg() {
//     console.log(this.mypower); //안에서 접근 가능
//     this.mypower = 10; //안에서 수정 가능
//   }
// }

// class Aaa2 extends Aaa1 {
//   /* 이 부분 없으면 자동으로 한다고 보면 됨.
//       constructor() {
//         super();
//       }
//     */
//   ggg() {
//     console.log(this.mypower); //자식이 접근 불가
//     this.mypower = 10; //자식이 수정 불가
//   }
// }

// const aaaa = new Aaa2(50);
// console.log(aaaa.mypower); //밖에서 접근 불가
// aaaa.mypower = 10; //밖에서 수정 불가

//******************************************************************************** */

//4. readonly - 접근은 다 되는데 수정불가
// class Aaa1 {
//   constructor(readonly mypower) {
//     // this.mypower = mypower;  //public, protected, private, readonly 등 1개만 포함되면 자동으로 셋팅됨.
//   }
//   ggg() {
//     console.log(this.mypower); //안에서 접근 가능
//     this.mypower = 10; //안에서 수정 불가
//   }
// }

// class Aaa2 extends Aaa1 {
//   /* 이 부분 없으면 자동으로 한다고 보면 됨.
//         constructor() {
//           super();
//         }
//       */
//   ggg() {
//     console.log(this.mypower); //자식이 접근 불가
//     this.mypower = 10; //자식이 수정 불가
//   }
// }

// const aaaa = new Aaa2(50);
// console.log(aaaa.mypower); //밖에서 접근 불가
// aaaa.mypower = 10; //밖에서 수정 불가

// //private readonly라고 하면 나 자신에서만 접근만 가능하다.(외부에서 접근 불가) 수정은 불가능하다. => 엄청나게 안전하게 사용하겠다. 나도 사용만할꺼지 수정하지는 않을거다.
