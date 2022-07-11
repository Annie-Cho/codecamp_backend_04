import { getToday } from './utils.js'
import nodemailer from 'nodemailer'
import 'dotenv/config'

export const checkEmail = (email) => {
    if(email === "" || email === undefined || email === null || email.includes("@") === false) {
        console.log("에러 발생!!! 이메일을 확인해주세요.")
        return false
    } else {
        return true
    }
}

export function getWelcomeTemplate({ name, phoneNum, preferSite }) {
    const myTemplate = `
        <html>
            <body>
                <div>
                    <div style="width: 500px;">
                        <h1>${name}님 가입을 환영합니다.</h1>
                        <hr>
                        <div>
                            <div>이름 : ${name}</div>
                            <div>전화번호 : ${phoneNum}</div>
                            <div>좋아하는 사이트 : ${preferSite}</div>
                            <div style="color: red;">가입일 : ${getToday()}</div>
                        </div>  
                    </div>
                </div>
            </body>
        </html>
    `
    // console.log(myTemplate)
    return myTemplate
}

export const sendEmail = async (email, template) => {
    const EMAIL_USER = process.env.EMAIL_USER
    const EMAIL_PASS = process.env.EMAIL_PASS
    const EMAIL_SENDER = process.env.EMAIL_SENDER

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS
        }
    })

    const response = await transporter.sendMail({
        from: EMAIL_SENDER,
        to: email,
        subject: "가입을 환영합니다^^",
        html: template
    })
    console.log(response)
    // console.log(`${email}주소로 가입환영 템플릿 ${template}를 전송합니다.`)
}