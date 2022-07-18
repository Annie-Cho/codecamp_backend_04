import { User } from "../models/user.model.js"
import { PhoneService } from './services/phone.js'
import { UserService } from './services/user.js'
import { EmailService } from './services/email.js'

export class UserController {
    fetchUsers = async (req, res) => {
        const result = await User.find()
        res.send(result)
    }

    createUser = async (req, res) => {
        let myPersonal = ''
        let isValid = true

        const name = req.body.name
        const email = req.body.email
        const personal = req.body.personal
        const prefer = req.body.prefer
        const pwd = req.body.pwd
        const phone = req.body.phone
        let og = {}

        const phoneService = new PhoneService()
        const userService = new UserService()
        const emailService = new EmailService()
        
        //인증 여부 확인
        isValid = await phoneService.checkAuthByPhone({ phone })
        if(isValid === false) {
            res.status(422).send("에러!! 핸드폰 번호가 인증되지 않았습니다")
            return
        }

        //주민등록번호 확인 및 뒷자리 가리기
        myPersonal = userService.generatePersonal({ personal })
        if(myPersonal === false) {
            return
        }

        //핸드폰번호 확인
        isValid = phoneService.checkValidationPhone({ phone })
        if(isValid === false) {
            return
        }

        //이메일 확인
        isValid = emailService.checkValidationEmail({ email })
        if(isValid === false) {
            return
        }

        //prefer site 생성
        og = await userService.createPreferSiteData({ prefer })

        //DB-users에 저장
        const user = new User({
            name,
            email,
            personal: myPersonal,
            prefer,
            pwd,
            phone,
            og
        })

        await user.save()

        //회원 가입 환영 메일
        await emailService.sendEmail({ name, email, phone, prefer })

        //클라이언트에 id 반환
        res.send(user.get('_id'))
    }
}