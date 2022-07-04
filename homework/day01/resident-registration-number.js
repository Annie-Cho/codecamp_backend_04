const customRegistrationNumber = (registerNum) => {
    let number = []
    number[0] = registerNum.split("-")[0]
    number[1] = registerNum.split("-")[1]

    if(registerNum.includes("-") === false) {
        console.log("에러 발생!!! 형식이 올바르지 않습니다!!!")
        return
    }
    if(number[0].length !== 6 || number[1].length !== 7) {
        console.log("에러 발생!!! 개수를 제대로 입력해 주세요!!!")
        return
    }

    number[1] = ((number[1].split('')).fill("*", 1)).join("")
    const result = number.join("-")
    console.log(result)
}

customRegistrationNumber("210510-1010101")
customRegistrationNumber("2105101010101")
customRegistrationNumber("210510-1010101010101")