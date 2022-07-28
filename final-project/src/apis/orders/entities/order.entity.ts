import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { Food } from 'src/apis/foods/entities/food.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 100 })
  @Field(() => Date)
  date: Date;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ type: 'varchar', length: 5, default: '상품준비중' })
  @Field(() => String)
  status: string;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinColumn()
  @Field(() => Coupon)
  @OneToOne(() => Coupon)
  coupon: Coupon;

  @JoinTable()
  @Field(() => [Food])
  @ManyToMany(() => Food, (foods) => foods.orders)
  foods: Food[];
}
