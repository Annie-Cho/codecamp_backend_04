import { checkEmail, hideRegisterNum, makeTemplate, sendTemplate } from './template_utils.js'

const registerSuccess = ({ email, registerNum, phoneNum, mySite }) => {
    let isValid = true
    let hidedNum = ""
    let template = ""
    
    // 1. 이메일이 비거나 '@'문자열이 들어있는지 확인
    isValid = checkEmail({ email })
    if(isValid === false)
        return

    // 2. 주민번호 뒷자리를 *로 가리기
    hidedNum = hideRegisterNum({ registerNum })

    // 3. 템플릿 만들기
    template = makeTemplate({ email, hidedNum, phoneNum, mySite })

    // 4. 템플릿 출력하기
    sendTemplate({ template })
}

const email = "support@codebootcamp.co.kr"
const registerNum = "210510-1234567"
const phoneNum = "000-0000-0000"
const mySite = "codebootcamp.co.kr"

registerSuccess({ email, registerNum, phoneNum, mySite })