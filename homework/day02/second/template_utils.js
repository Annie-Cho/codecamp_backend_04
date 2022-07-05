export const checkEmail = ({ email }) => {
    if(email === "" || email.includes("@") === false) {
        console.log("에러 발생!! 이메일을 확인해주세요.")
        return false
    } else {
        return true
    }
}

export const hideRegisterNum = ({ registerNum }) => {
    let result = registerNum.split('')
    result = (result.fill("*", -6)).join('')
    return result
}

export const makeTemplate = ({ email, hidedNum, phoneNum, mySite }) => {
    const template = `
        <html>
            <body>
                <h1>코드캠프님 가입을 환영합니다.</h1>
                <hr>
                <div>이메일: ${email}</div>
                <div>주민번호: ${hidedNum}</div>
                <div>휴대폰 번호: ${phoneNum}</div>
                <div>내가 좋아하는 사이트: ${mySite}</div>
            </body>
        </html>
    `
    return template
}

export const sendTemplate = ({ template }) => {
    console.log(template)
}