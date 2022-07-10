import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS} from './phone.js'

const app = express()

app.use(express.json())

app.get('/users', function (req, res) {
  const friends = [
    {
      email: "friendCho@gmail.com",
      name: "조영희",
      phone: "010-3333-3333"
    },
    {
      email: "friendLee@gmail.com",
      name: "이철수",
      phone: "010-3333-8888"
    }
  ]

  res.send(friends)
})

app.get('/characters', function(req, res) {
  const characters = [
    { name: "마이크와조스키", home: "New York" },
    { name: "티거", home: "Korea" },
    { name: "판다", home: "Korea" }
  ]

  res.send(characters)
})

app.post('/tokens/phone', function(req, res) {
  let isValid = true
  let myToken = ""
  let myPhone = req.body.phoneNum

  isValid = checkValidationPhone(myPhone)
  if(isValid === false) {
    return
  }

  myToken = getToken()
  if(myToken === false) {
    return
  }

  sendTokenToSMS(myPhone, myToken)
  res.send("인증 완료!!")
})

app.listen(3000)