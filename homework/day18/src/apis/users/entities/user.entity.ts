import { Field, ObjectType } from '@nestjs/graphql';
import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { UserGrade } from 'src/apis/usersGrades/entities/userGrade.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryColumn()
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @Field(() => String)
  name: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  @Field(() => String)
  pwd: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Field(() => String)
  address: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @Field(() => String)
  email: string;

  @ManyToOne(() => UserGrade)
  @Field(() => UserGrade)
  userGrade: UserGrade;
}
