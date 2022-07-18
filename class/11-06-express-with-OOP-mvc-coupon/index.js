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
import { BoardController } from './mvc/controllers/board.controller.js'
import { CouponController } from './mvc/controllers/coupon.controller.js'
import { ProductController } from './mvc/controllers/product.controller.js'

const app = express()

app.use(express.json())

//게시판 API
const boardController = new BoardController
app.get('/boards', boardController.fetchBoard)   //게시물 조회하기
app.post('/boards', boardController.createBoard)    //게시물 등록하기

//상품 API
const productController = new ProductController
app.post('/products/buy', productController.buyProduct)     //상품 구매하기 API
app.post('/products/refund', productController.refundProduct)  //상품 환불하기 API

//쿠폰(상품권) API - 쿠폰(상품권) 구매하기
const couponController = new CouponController
app.post('/coupons/buy', couponController.buyCoupon)  //여기는 함수 호출이 아니라 함수를 가져다 놓는 것!! ()쓰면 안됌!!

app.listen(3000)