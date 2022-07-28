import { Injectable } from '@nestjs/common';

//@Injectable -> 주입가능한
@Injectable()
export class BoardsService {
  // getHello() {
  //   return 'Hello World!';
  // }

  findAll() {
    //1. 데이터를 조회하는 로직 => DB에서 접속해서 데이터 꺼내오기
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용이에요',
      },
      {
        number: 1,
        writer: '영희',
        title: '영희 제목입니다~~',
        contents: '영희 내용이에요',
      },
      {
        number: 1,
        writer: '훈이',
        title: '훈이 제목입니다~~',
        contents: '훈이 내용이에요',
      },
    ];

    //2. 꺼내온 결과 응답 주기
    return result;
  }

  create({ createBoardInput }) {
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);
    //1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    //2. 저장 결과 응답 주기
    return '게시물 등록에 성공하였습니다.';
  }
}
