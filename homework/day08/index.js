import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import { Token } from './models/token.model.js'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/tokens/phone', async (req, res) => {
    let isValid = true
    let myToken = true
    const phoneNum = req.body.phoneNum

    isValid = checkValidationPhone(phoneNum)
    if(isValid === false) {
        return
    }

    myToken = getToken()
    if(myToken === false) {
        return
    }

    const result = await Token.findOne({phone: phoneNum})
    if(result) {
        await Token.updateOne({phone: phoneNum}, {token: myToken})
    } else {
        const token = new Token({
            token: myToken,
            phone: phoneNum,
            isAuth: false
        })
        await token.save()
    }

    // sendTokenToSMS(phoneNum, myToken)        //테스트는 했는데 포인트가 없서효..ㅠㅠ 그래서 주석처리..ㅠㅠ

    res.send(`${phoneNum}으로 인증 문자(${myToken})가 전송되었습니다.`)
})

app.patch('/tokens/phone', async (req, res) => {
    const phoneNum = req.body.phoneNum
    const myToken = req.body.myToken

    const result = await Token.findOne({phone: phoneNum, token: myToken})
    if(result) {
        await Token.updateOne({phone: phoneNum}, {isAuth: true})
        res.send("true")
    } else {
        res.send("false")
    }
})

mongoose.connect("mongodb://my-database:27017/myToken")

app.listen(3000)