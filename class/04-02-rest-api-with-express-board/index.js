//const express = require('express')

import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from '../01-05-token-count-api-facade-import/phone.js'

const app = express()

app.use(express.json())   //json파일을 읽을 수 있게됨
app.get('/boards', (req, res) => {            //'/'는 API endpoint
  //1. 데이터를 조회하는 로직 => DB에서 접속해서 데이터 꺼내오기
  const result = [
    { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요" },
    { number: 1, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요" },
    { number: 1, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요" }
  ]

  //2. 꺼내온 결과 응답 주기
  res.send(result)
})


app.post('/boards', (req, res) => {
  // console.log(req.body.writer)
  // console.log(req.body.title)
  // console.log(req.body.contents)
  //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

  //2. 저장 결과 응답 주기
  res.send("게시물 등록에 성공하였습니다.")
})

app.post('/tokens/phone', (req, res) => {
  //1단계 : 휴대폰번호 자릿수 맞는지 확인하기
  const myPhone = req.body.phoneNum
  const isValid = checkValidationPhone(myPhone)
  if(isValid === false) {
      return
  }

  //2단계 : 핸드폰 토큰 6자리 만들기
  const token = getToken()
  if(token === false) {
      return
  }

  //3단계 : 핸드폰번호의 토큰 전송하기
  sendTokenToSMS(myPhone, token)
  res.send("인증완료!!!")
})

app.listen(3000, () => {                    //접속을 기다린다
  // console.log(`프로그램을 켜는데 성공했어요!!`)
})

//1. import - ok 
//2. postman에서 데이터를 넘겨야함 -> api가 작동하게끔 만들기
//인증완료 뜨고 아래에 000-1111-1111 번호에 1234를 전송했어요!! 라고 띄워주기(터미널에))