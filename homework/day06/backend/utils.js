export const getToday = () => {
    const date = new Date()         //객체를 매개변수로 넘긴다
    //월만 0부터 시작함!
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, "0")      //getMonth()는 0부터 시작해서 1월이 0임.. 대부분의 소문은 처음에 모르고 잘못 만들었다가 소문..
    const dd = String(date.getDate()).padStart(2, "0")
    const today = `${yyyy}-${mm}-${dd}`

    return today
}

export const getPhoneNum = () => {
    const PhoneNumber01 = document.getElementById("PhoneNumber01").value
    const PhoneNumber02 = document.getElementById("PhoneNumber02").value
    const PhoneNumber03 = document.getElementById("PhoneNumber03").value

    const phoneNum = PhoneNumber01 + PhoneNumber02 + PhoneNumber03
    
    return phoneNum
}