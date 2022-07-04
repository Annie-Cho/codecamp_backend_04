import { checkType, checkLength, hideNumbers } from './registration.js'

const customRegistrationNumber = (registerNum) => {
    let isValid = true
    let result = ""
    let number = []
    number[0] = registerNum.split("-")[0]
    number[1] = registerNum.split("-")[1]

    isValid = checkType(registerNum)
    if(isValid === false) {
        return
    }

    isValid = checkLength(number)
    if(isValid === false) {
        return
    }
    
    result = hideNumbers(number)
    console.log(result)
}

customRegistrationNumber("210510-1010101")
customRegistrationNumber("2105101010101")
customRegistrationNumber("210510-1010101010101")