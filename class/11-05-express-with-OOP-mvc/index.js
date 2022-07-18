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
import { ProductController } from './mvc/controllers/product.controller'

const app = express()

//상품 API
const productController = new ProductController
app.post('/products/buy', productController.buyProduct)     //상품 구매하기 API
app.post('/products/refund', productController.refundProduct)  //상품 환불하기 API

app.listen(3000)