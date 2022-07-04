console.log("안녕하세요!!")

function createTokenOfPhone(phoneNum) {
    //1단계 : 휴대폰번호 자릿수 맞는지 확인하기
    if(phoneNum.length !== 10 && phoneNum.length !== 11) {
        console.log("에러 발생!! 핸드폰 번호를 제대로 입력해주세요.")
        return
    }

    //2단계 : 핸드폰 토큰 6자리 만들기
    const number = 6
    if(number === undefined || number === null) {
        console.log("에러 발생!! 갯수를 제대로 입력해주세요!!!")
        return
    } else if(number <=0) {
        console.log("에러 발생!! 갯수가 너무 적습니다!!!")
        return
    } else if(number > 10) {
        console.log("에러 발생!! 갯수가 너무 많습니다!!!")
        return
    }
    const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, "0")     //10 ** 3 = 1000 -> 10을 3번 곱한 격
    console.log(result)

    //3단계 : 핸드폰번호의 토큰 전송하기
    console.log(phoneNum + "번호로 인증번호" + result + "을 전송합니다!")
}

createTokenOfPhone("01012345678")
