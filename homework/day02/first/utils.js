export const getDate = ({ day }) => {
    const yyyy = day.getFullYear()
    const mm = String(day.getMonth() + 1).padStart(2, "0")
    const dd = String(day.getDate()).padStart(2, "0")
    const today = `${yyyy}년 ${mm}월 ${dd}일`

    return today
}

export const getTime = ({ day }) => {
    const hour = day.getHours()
    const min = String(day.getMinutes()).padStart(2, "0")
    const sec = String(day.getSeconds()).padStart(2, "0")
    const time = `${hour}:${min}:${sec}`

    return time
}