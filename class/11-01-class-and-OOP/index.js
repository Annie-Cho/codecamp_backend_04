const aaa = new Date()
const yyyy = aaa.getFullYear()
const mm = aaa.getMonth() + 1
const dd = aaa.getDate()
console.log(`${yyyy}-${mm}-${dd}`)
//여기까지는 사용자 입장

//여기서부터는 만드는 사람 입장
class Monster {
    // power = 10      //const, let 이런 건 안됨. 함수도 마찬가지. 앞에는 다 생략되어 있는 형태
    power = 10

    constructor(pwr){      //생성자 함수
        this.power = pwr
    }

    attack = () => {
        console.log("공격하자!!")
        console.log("내 공격력은 " + this.power + "이야!!")

        // this.power
        // this.run()      //공격하고 도망가기
    }

    run = () => {       //run() {}와 같은 표현
        console.log("도망가자!!")
    }
}

const myMonster1 = new Monster(100)
myMonster1.run()
myMonster1.attack()

const myMonster2 = new Monster(500)
myMonster2.attack()
myMonster2
