import axios from 'axios'
import cheerio from 'cheerio'

const createMessage = async () => {     // 스크래핑 - 정기적인 시간을 두고 여러번 스크래핑한다.(꾸준히X, 꾸준히는 크롤링!)

    //1.  메시지에서 http로 시작하는 문장이 있는지 먼저 찾기!

    //2. 해당 문장에서 axios.get으로 요청해서 html 코드 받아오기 => 스크래핑
    const result = await axios.get("https://www.naver.com")
    // console.log(result.data)

    //3. 스크랩핑 결과애서 OB(오픈 그래프)태그 골라내서 변수에 저장하기 => findone같은거 할 수 있는데 이걸 잘 정리해준게 cheerio이다.(설치해야함))
    const $ = cheerio.load(result.data)   //변수에 html코드를 넣으면 됨.
    $(`meta`).each((_, el) =>  {      //_ :index
        //if($(el).attr("property") && $(el).attr("property").includes("og:"))    //앞에께 있으면 뒤에꺼 해. -> 그런데 같은게 반복되니까 최근에 나온게 아래처럼 두개를 합쳐서 물음표를 붙여주자 => 옵셔널 체이닝
        if($(el).attr("property")?.includes("og:")) {      //attribute가 property라는 속성을 가지고 있다면. 여기서 물음표는 앞에가 있으면 .해서 뒤를 수행할 수 있는데 없으면(undefined) 수행할 수 없다. 
            const key = $(el).attr("property")    //og:title, og:description, ...
            const value = $(el).attr("content")
            console.log(key, value)
        }
    })      //each() : cheerio 안에 내장된 for문이다. => docs안에 다 나와있음. 만약 meta태그가 10개다! 하면 이 구문이 10번 실행됨. 5개다! 하면 5번 실행됨.
}


createMessage()