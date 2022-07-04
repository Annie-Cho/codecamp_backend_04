export const checkType = (registerNum) => {
    if(registerNum.includes("-") === false) {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return false
    }
}

export const checkLength = (number) => {
    if(number[0].length !== 6 || number[1].length !== 7) {
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
        return false
    }
}

export const hideNumbers = (number) => {
    number[1] = ((number[1].split('')).fill("*", 1)).join("")
    const result = number.join("-")
    return result
}