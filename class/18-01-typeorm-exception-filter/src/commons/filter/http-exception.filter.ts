import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  //예외 처리 내용 작성
  //but 그냥 적어놓으면 모르고, nestjs에게 이게 httpexception이야 라고 말해줘야한다. => 데코레이션 붙이기!!
  //   catch(exception: any, host: ArgumentsHost) {
  //     exception.getStatus();
  //     exception.message;
  //   }

  catch(exception: HttpException) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log('============================');
    console.log('에외가 발생했어요!!');
    console.log('예외내용 : ', message);
    console.log('에외코드', status);
    console.log('============================');
  }
}

// interface IProfile {
//   name: string;
//   price: number;
//   aaa: () => void;
// }

// const profile: IProfile = {
//   name: '철수',
//   price: 2000,
//   aaa: () => console.log('a'),
// };
