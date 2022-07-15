import express, { json } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { User } from './models/user.model.js'
import { Token } from './models/token.model.js'
import { generatePersonal, createPreferSiteData } from './personal.js'
import { checkValidationPhone, createToken, saveToken, sendTokenToPhone } from './phone.js'
import { checkValidationEmail, sendEmail } from './email.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/users', async (req, res) => {
    const result = await User.find();

    res.send(result)
})

app.post('/user', (req, res) => {
    let myPersonal = ''
    let isValid = true

    const name = req.body.name
    const email = req.body.email
    const personal = req.body.personal
    const prefer = req.body.prefer
    const pwd = req.body.pwd
    const phone = req.body.phone
    let og = {}
    
    //Tokens만들고 만들 것
    // const result = await User.findOne({phone: phone})
    // if(result === null) {
    //     //상태코드
    // }

    //주민등록번호 확인 및 뒷자리 가리기
    myPersonal = generatePersonal({ personal })
    if(myPersonal === false) {
        return
    }

    //핸드폰번호 확인
    isValid = checkValidationPhone({ phone })
    if(isValid === false) {
        return
    }

    //이메일 확인
    isValid = checkValidationEmail({ email })
    if(isValid === false) {
        return
    }

    //prefer site 생성
    og = createPreferSiteData({ prefer })

    //DB-users에 저장
    const user = new User({
        name,
        email,
        personal: myPersonal,
        prefer,
        pwd,
        phone,
        og
    })
    user.save()

    //회원 가입 환영 메일
    sendEmail({name, email, phone, prefer})

    //클라이언트에 id 반환
    res.send(user.get('_id'))
})

app.post('/tokens/phone', (req, res) => {
    let myToken = ''
    let result = ''
    let isValid = true
    const phone = req.body.phone

    //전화번호 유효성 확인
    isValid = checkValidationPhone({ phone })
    if(isValid === false) {
        return
    }

    //토큰 생성
    myToken = createToken()
    if(myToken === false) {
        return
    }

    //토큰 전송
    // sendTokenToPhone({ phone, myToken })     //제출 시 주석 풀기

    //DB-tokens에 저장
    saveToken({ phone, myToken })

    res.send("핸드폰으로 인증 문자가 전송되었습니다!")
})

mongoose.connect("mongodb://my-database:27017/myData")

app.listen(3000)