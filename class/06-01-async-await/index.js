import axios from 'axios'

//1. 비동기 방식
const fetchPost = () =>  {
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log('비동기 방식 : ', result)       //promise { <pending> }
}

fetchPost()

//2. 동기 방식
const fetchPost2 = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    //fetch("https://koreanjson.com/posts/1")도 요청할 수 있음
    console.log('동기 방식 : ', result.data)
    // console.log(`동기 방식 : ${JSON.stringify(result.data, null, " ")}`)
    // console.log(`동기 방식 : ${result.data}`)        //템플릿 리터럴에서 객체를 부를 때 이럴 수 있을듯..
    // 템플릿 리터럴에서는 문자열이나 숫자가 들어가야 하는 건데 이게 객체가 들어가버리면 인식을 못함. 쉼표를 쓴건 문자열 밖이라 상관없는듯
}

// async function fetchPost2() {
//     const result = await axios.get("https://koreanjson.com/posts/1")
//     console.log('동기 방식 : ', result.data)
// }

fetchPost2()