// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'       //import를 사용하려면 package.json에 type module 추가해야 함
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';


// The GraphQL schema
const typeDefs = gql`
  input CreateBoardInput {    # 다른데는 다 type 써도 되는데 input 에서는 input사용해야
    writer: String
    title: String
    contents: String
  }

  type MyReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    # fetchBoards: MyReturn => 객체 1개를 의미
    fetchBoards: [MyReturn]   # => 배열 안에 객체 여러개를 의미
  }

  type Mutation {   # 타입 부분이 반드시 추가되어야 한다! 아래 resolver만 정의하면 안됌. 오류메시지의 스키마에 없다 = type을 의미한다
    # createBoard(writer: String, title: String, contents: String): String
    createBoard(createBoardInput: CreateBoardInput!): String  # //뒤에 느낌표는 필수 입력!
    createTokenOfPhone(myPhone: String): String
  }
`;

/* express JSON 안해줘도 됨!!!!!!! */
/* graphql은 자동으로 docs가 만들어진다. */

// A map of functions which return data for the schema.
const resolvers = {   //04-02 index와 비교하며 하기
  Query: {
    fetchBoards: (parent , args, context, info) => {
      //parent 예시
      // console.log(parent)   //사과 출력

      //1. 데이터를 조회하는 로직 => DB에서 접속해서 데이터 꺼내오기
      const result = [
        { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요" },
        { number: 1, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요" },
        { number: 1, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요" }
      ]

      //2. 꺼내온 결과 응답 주기
      return result
    }
  },

  Mutation: {
    createBoard: (_, args) => {  //(parent , args, context, info)요청이 들어오면 다 argument에 있다, contents : 헤더, info : api에 대한 기타 정보들, parent : api에서 다른 api를 요청할 수 있음., 안쓰는 것들은 매개변수 지워도 됨. 위치가 중요해서 앞에꺼를 안써도 꼭 args는 들어 있어야 한다. 만약 안쓰면 _ 표기를 한다 앞에 참고.
      console.log(args.createBoardInput.writer)
      console.log(args.createBoardInput.title)
      console.log(args.createBoardInput.contents)
      //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      //2. 저장 결과 응답 주기
      return "게시물 등록에 성공하였습니다."

      //parent 예시
      // fetchBoards("사과") //라고 보내면 위에 fetchBoards()에서 첫 줄 확인
    },

    createTokenOfPhone: (_, args) => {
      const myPhone = args.myPhone

      //1단계 : 휴대폰번호 자릿수 맞는지 확인하기
      const isValid = checkValidationPhone(myPhone)
      if(isValid === false) {
        return      //if(isValid === false) throw new Error("휴대폰 자릿수가 맞지 않습니다.") =>  이런 식으로 예외처리를 해줘야 한다. 현재 return은 값을 보내주는 역할이라 
      }

      //2단계 : 핸드폰 토큰 6자리 만들기
      const token = getToken()

      //3단계 : 핸드폰번호의 토큰 전송하기
      sendTokenToSMS(myPhone, token)
      return "인증완료!!!"
    }
  }
};

const server = new ApolloServer({       /* 얘가 04-01 index와 비교했을 때 app */
  typeDefs,     //타입을 만들어주는 것이 rest-api와 다른 점
  resolvers,
  cors: true,
  /* 원하는 값만 cors하기
    cors: {
      cmd+i 하면 뭘 쓸 수 있는 지 나옴
    }
  */
  /* 아래가 원본. key와 value가 같으면 줄여쓸 수 있음.
    typeDefs: typeDefs,
    resolvers: resolvers,
  */
});

server.listen(3000).then(() => {
  console.log("프로그램을 켜는데 성공했어요");
});
