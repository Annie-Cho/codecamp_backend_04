import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;
}

/*
ObjectType, Field를 통하여 아래와 같이 만들어진다고 보면 된다
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

*/
