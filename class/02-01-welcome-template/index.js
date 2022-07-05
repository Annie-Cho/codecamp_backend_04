const apple = 3
const banana = 2

console.log("철수는 사과를 " + apple + "개, 바나나를 " + banana + "개 가지고 있습니다.")
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`)

function getWelcomeTemplate({ name, age, school, createdAt }) {         //객체를 매개변수로 넘긴다
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!!!</h1>
                <hr>
                <div>
                    <div>이름 : ${name}</div>
                    <div>나이 : ${age}살</div>
                    <div>학교 : ${school}</div>
                    <div>가입일 : ${createdAt}</div>
                </div>
            </body>
        </html>
    `
    console.log(myTemplate)
}

const name = "영희"
const age = 12
const school = "토끼초등학교"
const createdAt = "2020-01-02"
getWelcomeTemplate({ name, age, school, createdAt })        //객체를 매개변수로 넘기면, 해당 변수이름에 맞춰서 가져가기 때문에 매개변수 1개가 비어도 상관없이 매개변수 형태에 맞춰서 들어간다.
getWelcomeTemplate({ name, age, createdAt })