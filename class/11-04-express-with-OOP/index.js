/*
1. class를 활용한 효율적인 API만들기
  1) 상품 구매 API - 상품 기능
  2) 상품 환불 API - 상품 기능
  3) 쿠폰 구매 API - 쿠폰 기능
2. 실무적인 폴더 구조 만들기(MVC pattern)
3. express의 노가다 알아보기 -> Nest.js가 이렇게 편하구나! 를 알 수 있다.
4. DI(Dependency Injection)이해하기

위 내용들이 적용되어 있는 프레임 워크 => Nest.js
*/

import express from 'express'
import { CashService } from './cash.js'
import { ProductService } from './product.js'

const app = express()

//상품 구매하기 API
app.post('/products/buy', (req, res) => {       //두번째 인자가 미들웨어 함수이다.
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
})

//상품 환불하기 API
app.post('/products/refund', (req, res) => {
    //1. 판매여부를 검증하는 코드(대략 10줄 정도 작성)
    const ProductService = new ProductService
    const isSoldout = ProductService.checkSoldout()

    //2. 상품 환불하는 코드
    if(isSoldout) {
        res.send("상품 환불 완료")
    }

    
})

//쿠폰 구매하기 API
app.post()


app.listen(3000)