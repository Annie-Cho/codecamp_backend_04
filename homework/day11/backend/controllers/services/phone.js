import { Token } from '../../models/token.model.js'

export class PhoneService {
    checkAuthByPhone = async ({ phone }) => {
        const result = await Token.findOne({phone: phone})
        if(result !== null) {
            return result.isAuth === true
        } else {
            return false
        }
    }

    checkValidationPhone = ({ phone }) => {
        //전화번호 유효성 확인
        if(phone.length != 11 && phone.length !== 10) {
            console.log("[ERROR] 전화번호를 확인해주세요.")
            return false
        } else {
            return true
        }
    }
}