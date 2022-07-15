import express, { json } from 'express'
import mongoose from 'mongoose'
import { User } from './models/user.model.js'
import { generatePersonal, createPreferSiteData } from './personal.js'
import { checkValidationPhone } from './phone.js'
import { checkValidationEmail, sendEmail } from './email.js'

const app = express()

app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/user', async (req, res) => {
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
    og = await createPreferSiteData({ prefer })

    //DB에 저장
    const user = new User({
        name,
        email,
        personal: myPersonal,
        prefer,
        pwd,
        phone,
        og
    })
    await user.save()

    //회원 가입 환영 메일
    await sendEmail({name, email, phone, prefer})

    //클라이언트에 id 반환
    res.send(user.get('_id'))
})

mongoose.connect("mongodb://my-database:27017/myData")

app.listen(3000)