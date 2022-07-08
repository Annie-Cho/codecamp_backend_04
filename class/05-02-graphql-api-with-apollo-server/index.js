// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'       //import를 사용하려면 package.json에 type module 추가해야 함

// The GraphQL schema
const typeDefs = gql`
  type Query {
    aaa: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    aaa: () => 'Hello World! 반가워요!!',   //axios에서는 res.send()가 이렇게 출력
    /* 아래가 원본. 내부에 아무것도 없으면 위와같이 줄일 수 있음.
    aaa: () => {
        return 'world'
    }
    위에가 축약되서 아래가 되고 이게 축약된게 지금 맨 위에 있는 것.
    aaa: () => ('world')
    */
  },
};

const server = new ApolloServer({       /* 얘가 04-01 index와 비교했을 때 app */
  typeDefs,     //타입을 만들어주는 것이 rest-api와 다른 점
  resolvers,
  /* 아래가 원본. key와 value가 같으면 줄여쓸 수 있음.
    typeDefs: typeDefs,
    resolvers: resolvers,
  */
});

server.listen(3000).then(() => {
  console.log("프로그램을 켜는데 성공했어요");
});
