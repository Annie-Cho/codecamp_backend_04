import express from 'express'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js'
import { checkEmail, getWelcomeTemplate, sendEmail } from './email.js'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { options } from './swagger/config.js'
import cors from 'cors'
import mongoose from 'mongoose'
import { Board } from './models/board.model.js'

const app = express()

/* app.use()는 등록이다! */
app.use(cors()) /* 모든 주소 허락 */

// app.use(cors({
//   origin: "http://naver.com"  /*네이버 만큼은 허락해주겠다*/
// }))
app.use(express.json())   //json파일을 읽을 수 있게됨
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));    //swaggerUi.serve 이것도 미들네임 함수, 그 뒤에 swaggerUi.setup 이쪽도 미들네임 함수
app.get('/boards', async (req, res) => {            //'/'는 API endpoint
  //1. 데이터를 조회하는 로직 => DB에서 접속해서 데이터 꺼내오기
  // const result = [
  //   { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요" },
  //   { number: 1, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요" },
  //   { number: 1, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요" }
  // ]
  const result = await Board.find()   //기존의 collection에서 find해서 찾아옴.
//  const result = await Board.find({ writer: "철수"})  //철수 인 사람만 찾아오는 법

  //2. 꺼내온 결과 응답 주기
  res.send(result)
})


app.post('/boards', async (req, res) => {
  console.log(req.body.writer)
  console.log(req.body.title)
  console.log(req.body.contents)

  //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  const board = new Board({   //임시저장한 collection을 board에 넣음.
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.title
  })
  await board.save()      //save()가 날라가야 DB에 저장이된다. await를 붙여야지 완료가 된 후 다음 줄이 실행된다.

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

/*
app.get('/boards/:id')
app.put('/boards/:id)
app.post('/users')
app.get('/users/:id')
app.put('/users/:id')
*/

app.post('/users', (req, res) => {
  let isValid = true
  let template = ""

  const{email, name, age, school} = req.body.myuser
    
  //1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  isValid = checkEmail(email)
  if(isValid === false)
      return

  //2. 가입환영 템플릿 만들기
  template = getWelcomeTemplate({ name, age, school })

  //3. 이메일에 가입환영 템플릿 전송하기
  sendEmail(email, template)
  res.send("가입 완료!!")
})

//몽고DB 접속!!
// mongoose.connect("mongodb://localhost:27017/mydocker04") //이게 아니라 아래처럼 my-database라고 해줘야지 찾아갈 수 있다.
mongoose.connect("mongodb://my-database:27017/mydocker04") //이렇게 하면 DB는 안에 자동으로 만들어진다.

//backend API 서버 오픈!!

app.listen(3000, () => {                    //접속을 기다린다. listen은 메소드이다. api아님!
  // console.log(`프로그램을 켜는데 성공했어요!!`)
}) 