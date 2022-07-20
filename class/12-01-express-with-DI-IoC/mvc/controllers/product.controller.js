export class ProductController {
    constructor(moneyService, productService) {   //의존성 주입!!!
        this.moneyService = moneyService
        this.productService = productService
    }

    buyProduct = (req, res) => {
            //1. 가진 돈 검증하기(대략 10줄 정도 작성 => 2줄로 줄었다)
            // const cashService = new CashService()  => 강한 의존성
            const hasMoney = this.moneyService.checkValue()
        
            //2. 판매여부를 검증하는 코드(대략 10줄 정도 작성 => 2줄로 줄었다)
            // const productService = new ProductService()    => 강한 의존성
            const isSoldout = this.productService.checkSoldout()
        
            //3. 상품 구매 코드
            if(hasMoney && !isSoldout) {
                res.send("상품 구매 완료")
            }
        }

    refundProduct = (req, res) => {
        //1. 판매여부를 검증하는 코드(대략 10줄 정도 작성)
        // const productService = new ProductService()      => 강한 의존성
        const isSoldout = this.productService.checkSoldout()
    
        //2. 상품 환불하는 코드
        if(isSoldout) {
            res.send("상품 환불 완료")
        }
    }
}