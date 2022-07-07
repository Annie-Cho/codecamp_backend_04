// const express = require('express')
import express from 'express'
const app = express()

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

app.listen(3000)