import coolsms from "coolsms-node-sdk";
import { Token } from "../../models/token.model.js";

export class TokenService {
  createToken = () => {
    const number = 6;
    let result = "";

    if (number === undefined || number === null) {
      console.log("[ERROR] 갯수를 입력해주세요.");
      return false;
    } else if (number <= 0) {
      console.log("[ERROR] 갯수가 너무 적습니다.");
      return false;
    } else if (number > 10) {
      console.log("[ERROR] 갯수가 너무 많습니다.");
      return false;
    }

    result = String(Math.floor(Math.random() * 10 ** number)).padStart(
      number,
      "0"
    );
    return result;
  };

  sendTokenToPhone = async ({ phone, myToken }) => {
    const SMS_KEY = process.env.SMS_KEY;
    const SMS_SECRET = process.env.SMS_SECRET;
    const SMS_SENDER = process.env.SMS_SENDER;

    const mysms = coolsms.default;
    const messageService = new mysms(SMS_KEY, SMS_SECRET);

    const result = await messageService.sendOne({
      to: phone,
      from: SMS_SENDER,
      text: `[코드캠프] 안녕하세요? 요청하신 인증번호는[${myToken}]입니다.`,
    });
    console.log(result);
  };

  saveToken = async ({ phone, myToken }) => {
    const foundRes = await Token.findOne({ phone: phone });
    if (foundRes !== null) {
      await Token.updateOne({ phone: phone }, { token: myToken });
    } else {
      const token = new Token({
        token: myToken,
        phone,
        isAuth: false,
      });
      await token.save();
    }
  };

  checkTokenByPhone = async ({ phone, token }) => {
    let updated = {};

    const result = await Token.findOne({ phone: phone });
    if (result !== null) {
      if (token === result.token) {
        updated = await Token.updateOne({ phone: phone }, { isAuth: true });
        return updated !== null;
      } else {
        console.log("[ERROR] 인증번호가 일치하지 않습니다.");
        return false;
      }
    } else {
      console.log("[ERROR] 일치하는 사용자가 없습니다.");
      return false;
    }
  };
}
