// const { checkValidationPhone, getToken, sendTokenToSMS } = require("./phone.js")  //옛날방식(commonjs 방식)
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'     //신규방식(module 방식)
/* yarn init하고 package.json가서 type module 넣어줘야 함!!! */

console.log("안녕하세요!!")

function createTokenOfPhone(phoneNum) {
    //1단계 : 휴대폰번호 자릿수 맞는지 확인하기
    const isValid = checkValidationPhone(phoneNum)
    if(isValid === false) {
        return
    }

    //2단계 : 핸드폰 토큰 6자리 만들기
    const token = getToken()
    if(token === false) {
        return
    }

    //3단계 : 핸드폰번호의 토큰 전송하기
    sendTokenToSMS(phoneNum, token)
}

createTokenOfPhone("01012345678")
