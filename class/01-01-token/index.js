console.log("안녕하세요!!")

function getToken() {
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    console.log(result)
}

getToken()


function getToken2(number) {
    const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, "0")     //10 ** 3 = 1000 -> 10을 3번 곱한 격
    console.log(result)
}

getToken2(8)