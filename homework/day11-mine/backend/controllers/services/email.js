import nodemailer from 'nodemailer'
import 'dotenv/config'
import { UtilService } from './utils.js'

export class EmailService {
    checkValidationEmail = ({ email }) => {
        if(email === '' || email === undefined || email.includes('@') === false) {
            console.log("[ERROR] 이메일을 확인해주세요.")
            return false
        } else {
            return true
        }
    }

    sendEmail = async ({ name, email, phone, prefer }) => {
        const template = this.emailTemplate({ name, phone, prefer })

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

        let response = await transporter.sendMail({
            from: EMAIL_SENDER,
            to: email,
            subject: `[Codecamp] ${name} 님의 회원가입을 축하드립니다.`,
            html: template
        })

        console.log(response)
    }

    emailTemplate = ({ name, phone, prefer }) => {
        const utilService = new UtilService()

        const myTemplate = `
            <html>
                <body>
                    <div>
                        <div style="width: 500px;">
                            <h1>${name}님 가입을 환영합니다.</h1>
                            <hr>
                            <div>
                                <div>이름 : ${name}</div>
                                <div>전화번호 : ${phone}</div>
                                <div>좋아하는 사이트 : ${prefer}</div>
                                <div style="color: red;">가입일 : ${utilService.getToday()}</div>
                            </div>  
                        </div>
                    </div>
                </body>
            </html>
        `

        return myTemplate
    }
}