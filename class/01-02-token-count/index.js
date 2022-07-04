console.log("안녕하세요!!")

function getToken(number) {
    //undefined, null
    if(number === undefined || number === null) {
        console.log("에러 발생!! 갯수를 제대로 입력해주세요!!!")
        return
    } else if(number <=0) {
        console.log("에러 발생!! 갯수가 너무 적습니다!!!")
        return
    } else if(number > 10) {
        console.log("에러 발생!! 갯수가 너무 많습니다!!!")
        return
    } else {
        const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, "0")     //10 ** 3 = 1000 -> 10을 3번 곱한 격
        console.log(result)
    }
}

getToken(null)
getToken(-1)
getToken(11)
getToken(8)
