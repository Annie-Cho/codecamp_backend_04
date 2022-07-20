import { TokenService } from "./services/token.js";
import { PhoneService } from "./services/phone.js";

export class TokenController {
  sendToken = async (req, res) => {
    let myToken = "";
    let isValid = true;
    const phone = req.body.phone;

    const tokenService = new TokenService();
    const phoneService = new PhoneService();

    //전화번호 유효성 확인
    isValid = phoneService.checkValidationPhone({ phone });
    if (isValid === false) {
      return;
    }

    //토큰 생성
    myToken = tokenService.createToken();
    if (myToken === false) {
      return;
    }

    //토큰 전송
    // await tokenService.sendTokenToPhone({ phone, myToken }); //제출 시 주석 풀기

    //DB-tokens에 저장
    await tokenService.saveToken({ phone, myToken });

    res.send("핸드폰으로 인증 문자가 전송되었습니다!");
  };
}
