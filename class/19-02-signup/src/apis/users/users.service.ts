import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create({ email, pwd, name, age }) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');

    // if (user) {
    //   throw new HttpException('이미 등록된 이메일입니다.', HttpStatus.CONFLICT);
    // }

    return this.userRepository.save({ email, pwd, name, age }); //short-end property
  }
}
