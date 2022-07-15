export const getToday = () => {
    let today = new Date()

    let yyyy = today.getFullYear()
    let mm = String(today.getMonth()).padStart(2, '0')
    let dd = String(today.getDate()).padStart(2, '0')

    return `${yyyy}-${mm}-${dd}`
}