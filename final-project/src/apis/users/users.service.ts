import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
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
      throw new UnprocessableEntityException('이미 사용중인 아이디입니다.');
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
}
