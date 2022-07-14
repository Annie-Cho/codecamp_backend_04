// 여기어때 크롤링 위법 사례: https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/

import puppeteer from 'puppeteer'

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false })       //headless: true 하면 브라우저가 우리 눈에 안보임
    const page = await browser.newPage()    //새로운 페이지 만들어짐.
    await page.setViewport({ width: 1280, height: 720 })  //사이즈 조정
    await page.goto("https://www.goodchoice.kr/product/search/2")    //페이지안에 있는 코드가 저장됨
    await page.waitForTimeout(1000)       //페이지 이동한 후 네이버에 있는 코드 받아올 때까지 기다려줘야 함.
    //page.$eval("셀렉터", (el) => (el.textContent)) -> 페이지를 가져온다. 셀렉터로 셀렉팅 된 애가 el 요소로 들어옴.
    //#poduct_list_area > li:nth-child(2) > a > div > div.name > strong       //내가 필요한 부분에 오른쪽 버튼 클릭 -> copy -> copy Selector

    const stage = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
        (el) => el.textContent)

    const location = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)", 
        (el) => el.textContent)

    const price = await page.$eval(
        "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b", 
        (el) => el.textContent)
    //내가 지금 셀렉터를 세번했는데 세번 접속한건가? 아니다. goto로 해서 가져온 거라 부하는 1번 줬다. 위에 goto로 페이지만 받아오면 그 아래는 와이파이끄고도 가능. 접속은 goto에서..

    console.log(stage)
    console.log(location.trim())
    console.log(price)

    await browser.close()
}

startCrawling()