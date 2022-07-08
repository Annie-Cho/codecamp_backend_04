export const checkValidationPhone = (phoneNum) => {
    if(phoneNum.length !== 10 && phoneNum.length !== 11) {
        console.log("에러 발생!! 핸드폰 번호를 제대로 입력해주세요.")
        return false
    } else {
        return true
    }
}

export const getToken = () => {
    const number = 6
    if(number === undefined || number === null) {
        console.log("에러 발생!! 갯수를 제대로 입력해주세요!!!")
        return false
    } else if(number <=0) {
        console.log("에러 발생!! 갯수가 너무 적습니다!!!")
        return false
    } else if(number > 10) {
        console.log("에러 발생!! 갯수가 너무 많습니다!!!")
        return false
    }
    const result = String(Math.floor(Math.random() * (10 ** number))).padStart(number, "0")     //10 ** 3 = 1000 -> 10을 3번 곱한 격
    // console.log(result)
    return result
}

export const sendTokenToSMS = (phoneNum, result) => {
    console.log(phoneNum + "번호로 인증번호" + result + "을 전송합니다!")
}
