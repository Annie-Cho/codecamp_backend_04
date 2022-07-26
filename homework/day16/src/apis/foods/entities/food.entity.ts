import { Order } from 'src/apis/orders/entities/order.entity';
import { SubCategory } from 'src/apis/subCategories/entities/subCategory.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column()
  price: number;

  @Column({ type: 'varchar', length: 500 })
  desc: string;

  @Column()
  kcal: number;

  @ManyToOne(() => SubCategory)
  subCategory: SubCategory;

  @ManyToMany(() => Order, (orders) => orders.foods)
  orders: Order;
}
