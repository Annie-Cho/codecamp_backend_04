//const express = require('express')

import express from 'express'

const app = express()

app.get('/aaa', (req, res) => {            //'/'는 API endpoint
  res.send('Hello World! 반가워요!!')
})

/*
app.post('/qqq', (req, res) => {

})
*/

app.listen(3000, () => {                    //접속을 기다린다
  console.log(`프로그램을 켜는데 성공했어요!!`)
})