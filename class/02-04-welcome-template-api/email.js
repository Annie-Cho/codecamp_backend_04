import { getToday } from './utils.js'

export const checkEmail = (email) => {
    if(email === "" || email === undefined || email === null || email.includes("@") === false) {
        console.log("에러 발생!!! 이메일을 확인해주세요.")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate({ name, age, school }) {
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr>
                <div>
                    <div>이름 : ${name}</div>
                    <div>나이 : ${age}살</div>
                    <div>학교 : ${school}</div>
                    <div>가입일 : ${getToday()}</div>
                </div>
            </body>
        </html>
    `
    // console.log(myTemplate)
    return myTemplate
}

export const sendEmail = (email, template) => {
    console.log(`${email}주소로 가입환영 템플릿 ${template}를 전송합니다.`)
}