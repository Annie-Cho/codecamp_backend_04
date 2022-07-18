import { CashService } from './services/cash.js'
import { ProductService } from './services/product.js'

export class ProductController {
    buyProduct = (req, res) => {
            //1. 가진 돈 검증하기(대략 10줄 정도 작성 => 2줄로 줄었다)
            const cashService = new CashService()
            const hasMoney = cashService.checkValue()
        
            //2. 판매여부를 검증하는 코드(대략 10줄 정도 작성 => 2줄로 줄었다)
            const ProductService = new ProductService
            const isSoldout = ProductService.checkSoldout()
        
            //3. 상품 구매 코드
            if(hasMoney && !isSoldout) {
                res.send("상품 구매 완료")
            }
        }

    refundProduct = (req, res) => {
        //1. 판매여부를 검증하는 코드(대략 10줄 정도 작성)
        const ProductService = new ProductService
        const isSoldout = ProductService.checkSoldout()
    
        //2. 상품 환불하는 코드
        if(isSoldout) {
            res.send("상품 환불 완료")
        }
    }
}