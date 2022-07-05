import { getWelcomeTemplate, checkEmail, sendEmail } from './email.js'

function createUser({ name, age, school, email }) {
    let isValid = true
    let template = ""
    
    //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    isValid = checkEmail(email)
    if(isValid === false)
        return

    //2. 가입환영 템플릿 만들기
    template = getWelcomeTemplate({ name, age, school })

    //3. 이메일에 가입환영 템플릿 전송하기
    sendEmail(email, template)
}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"

createUser({ name, age, school, email })