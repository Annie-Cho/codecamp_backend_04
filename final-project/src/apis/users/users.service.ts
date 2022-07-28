import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  findOne({ userId }) {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  create({ createUserInput }) {
    return this.userRepository.save({ ...createUserInput });
  }

  async checkIsAvailable({ userId }) {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (user) {
      // throw new UnprocessableEntityException('이미 사용중인 아이디입니다.');
      throw new HttpException(
        '이미 사용 중인 아이디입니다.',
        HttpStatus.CONFLICT,
      );
    }
  }

  async update({ userId, updateUserInput }) {
    const user = await this.userRepository.findOne({ where: { id: userId } });

    return this.userRepository.save({
      ...user,
      id: userId,
      ...updateUserInput,
    });
  }

  async delete({ userId }) {
    console.log(userId);
    const result = await this.userRepository.softDelete({ id: userId });
    return result.affected;
  }

  async restore({ userId }) {
    const result = await this.userRepository.restore({ id: userId });
    return result.affected;
  }
}
