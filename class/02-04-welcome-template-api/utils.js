export const getToday = () => {
    const date = new Date()         //객체를 매개변수로 넘긴다
    //월만 0부터 시작함!
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, "0")      //getMonth()는 0부터 시작해서 1월이 0임.. 대부분의 소문은 처음에 모르고 잘못 만들었다가 소문..
    const dd = String(date.getDay()).padStart(2, "0")
    const today = `${yyyy}-${mm}-${dd}`

    return today
}