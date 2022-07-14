// 여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import puppeteer from 'puppeteer'

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false })       //headless: true 하면 브라우저가 우리 눈에 안보임
    const page = await browser.newPage()    //새로운 페이지 만들어짐.
    await page.setViewport({ width: 1280, height: 720 })  //사이즈 조정
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930")
    await page.waitForTimeout(1000)
    const framePage = await page.frames().find((el) => el.url().includes("/item/sise_day.naver?code=005930"))  //iframe을 먼저 찾아야한다. 왜냐면 date와 price의 body는 iframe안의 body 태그에 있기 때문이다.

    for(let i=3; i<=7; i++) {
        const date = await framePage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
            (el) => el.textContent
        )
    
        const price = await framePage.$eval(
            `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
            (el) => el.textContent
        )
    
        console.log(`날짜: ${date}, 가격: ${price}`)
    }

    
    await browser.close()     //자동으로 브라우저 끄기
}

startCrawling()