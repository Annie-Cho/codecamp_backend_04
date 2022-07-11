import coolsms from 'coolsms-node-sdk'
import 'dotenv/config'

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

export const sendTokenToSMS = async (phoneNum, result) => {
    const SMS_KEY = process.env.SMS_KEY
    const SMS_SECRET = process.env.SMS_SECRET
    const SMS_SENDER = process.env.SMS_SENDER

    const mysms = coolsms.default
    const messageService = new mysms(SMS_KEY, SMS_SECRET)

    const response = await messageService.sendOne({
        to: phoneNum,
        from: SMS_SENDER,
        text: `안녕하세요!! 인증번호는 ${result}입니다!!`
    })
    console.log(response)
}
