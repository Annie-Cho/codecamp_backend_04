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
export class Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'char', length: 10 })
  date: Date;

  @Column()
  price: number;

  @Column({ type: 'varchar', length: 5 })
  status: string;

  @ManyToOne(() => User)
  user: User;

  @JoinColumn()
  @OneToOne(() => Coupon)
  coupon: Coupon;

  @JoinTable()
  @ManyToMany(() => Food, (foods) => foods.orders)
  foods: Food[];
}
