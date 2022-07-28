import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User])
  fetchUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User)
  fetchUser(@Args('userId') userId: string) {
    return this.usersService.findOne({ userId });
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    await this.usersService.checkIsAvailable({
      userId: createUserInput.id,
    });

    return this.usersService.create({ createUserInput });
  }

  @Mutation(() => User)
  updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('userId') userId: string) {
    return this.usersService.delete({ userId });
  }

  @Mutation(() => Boolean)
  restoreUser(@Args('userId') userId: string) {
    return this.usersService.restore({ userId });
  }
}
