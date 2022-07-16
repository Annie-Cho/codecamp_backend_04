// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  
  const phone = getPhoneNum()
  const result = await axios.post('http://localhost:3000/tokens/phone', { phone })

  console.log('인증 토큰 전송')
}

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const phone = getPhoneNum()
  const token = document.getElementById("TokenInput").value
  const result = await axios.patch('http://localhost:3000/tokens/phone', { phone, token })

  console.log('핸드폰 인증 완료')
}

// 회원 가입 API 요청
const submitSignup = async () => {
  const userInfo = getUserInfo()
  const result = await axios.post('http://localhost:3000/user', {...userInfo})

  console.log('회원 가입 완료')
}
