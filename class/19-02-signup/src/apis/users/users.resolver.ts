import { Args, Mutation, Resolver, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('pwd') pwd: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number, //graphql이 소수점으로 찍어서 우리가 정정해줌.
  ) {
    return this.usersService.create({ email, pwd, name, age });
  }
}
