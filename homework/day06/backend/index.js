// const express = require('express')
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import bodyParser from 'body-parser'
import { checkEmail, getWelcomeTemplate, sendEmail } from './email.js'

const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  const result = [
    {email: "aaa@gmail.com", name: "철수", phone: "010-1234-5678", personal: "220110-2222222", prefer: "https://naver.com"},
    {email: "bbb@gmail.com", name: "영희", phone: "010-1234-5678", personal: "220219-2222222", prefer: "https://naver.com"},
    {email: "ccc@gmail.com", name: "훈이", phone: "010-1234-5678", personal: "891219-2222222", prefer: "https://naver.com"},
    {email: "ddd@gmail.com", name: "승빈", phone: "010-1234-5678", personal: "830315-2222222", prefer: "https://naver.com"},
    {email: "eee@gmail.com", name: "은철", phone: "010-1234-5678", personal: "230908-2222222", prefer: "https://naver.com"}
  ]

  res.send(result)
})
 
app.get('/starbucks', (req, res) => {
  const result = [
    {name: "아메리카노", kcal: 10},
    {name: "카페라떼", kcal: 150},
    {name: "콜드브루", kcal: 10},
    {name: "카페모카", kcal: 130},
    {name: "돌체라떼", kcal: 170},
    {name: "카라멜라떼", kcal: 215},
    {name: "바닐라라떼", kcal: 227},
    {name: "에스프레소", kcal: 5},
    {name: "디카페인", kcal: 10},
    {name: "오트라떼", kcal: 190}
  ]

  res.send(result)
})

app.post('/register', (req, res) => {
  let isValid = true
  let token = true
  
  const phoneNum = req.body.phoneNum
  isValid = checkValidationPhone(phoneNum)
  if(isValid === false) {
    return
  }

  token = getToken()
  if(token === false) {
    return
  }

  sendTokenToSMS(phoneNum, token)
})

app.post('/welcome', (req, res) => {
  let isValid = true
  let template = ""

  const email = req.body.email
  const name = req.body.name
  const phoneNum = req.body.phoneNum
  const preferSite = req.body.preferSite
  console.log(phoneNum)

  isValid = checkEmail(email)
  if(isValid === false) {
    return
  }

  template = getWelcomeTemplate({ name, phoneNum, preferSite })

  sendEmail(email, template)
})

app.listen(3000)