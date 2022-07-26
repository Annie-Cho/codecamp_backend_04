import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { UserGrade } from 'src/apis/usersGrades/entities/userGrade.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 20 })
  pwd: string;

  @Column({ type: 'varchar', length: 100 })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @ManyToOne(() => UserGrade)
  userGrade: UserGrade;
}
