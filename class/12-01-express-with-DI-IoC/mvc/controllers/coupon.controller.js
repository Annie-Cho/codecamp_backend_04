export class CouponController {
    constructor(moneyService) { //굳이 this.과 같은 이름으로 하지 않아도 됨.
        this.moneyService = moneyService    
    }

    buyCoupon = (req, res) => {
        //1. 가진 돈 검증 코드(10줄)
        // const cashService = new CashService()    //밖에다가 만듬. -> 이건 강한 의존성
        const hasMoney = this.moneyService.checkValue()

        //2. 쿠폰 구매하는 코드
        if(hasMoney) {
            res.send("쿠폰 구매 완료")
        }
    }
}