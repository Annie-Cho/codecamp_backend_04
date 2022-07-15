export const checkValidationPhone = ({ phone }) => {
    //전화번호 유효성 확인
    return phone.length === 11 || phone.length === 10
}