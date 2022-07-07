// const express = require('express')
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'

const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));

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

app.listen(3000)