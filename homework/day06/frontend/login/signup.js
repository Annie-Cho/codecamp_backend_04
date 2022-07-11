// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  console.log('인증 번호 전송')

  const PhoneNumber01 = document.getElementById("PhoneNumber01").value
  const PhoneNumber02 = document.getElementById("PhoneNumber02").value
  const PhoneNumber03 = document.getElementById("PhoneNumber03").value

  let phoneNum = PhoneNumber01 + PhoneNumber02 + PhoneNumber03
  
  const result = await axios.post("http://localhost:3000/register", {
    phoneNum: phoneNum
  })
  console.log(result)

}

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')

  const name = document.getElementById("SignupName").value
  const registerNum = document.getElementById("SignupPersonal").value
  
  const PhoneNumber01 = document.getElementById("PhoneNumber01").value
  const PhoneNumber02 = document.getElementById("PhoneNumber02").value
  const PhoneNumber03 = document.getElementById("PhoneNumber03").value

  let phoneNum = PhoneNumber01 + PhoneNumber02 + PhoneNumber03

  const preferSite = document.getElementById("SignupPrefer").value
  const email = document.getElementById("SignupEmail").value
  const pwd = document.getElementById("SignupPwd").value

  const result = await axios.post("http://localhost:3000/welcome", {
    name: name,
    registerNum: registerNum,
    phoneNum: phoneNum,
    preferSite: preferSite,
    email: email,
    pwd: pwd
  })
  console.log(result)
}
