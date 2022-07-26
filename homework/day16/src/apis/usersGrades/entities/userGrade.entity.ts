import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserGrade {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 4 })
  name: string;

  @JoinTable()
  @ManyToMany(() => Coupon, (coupons) => coupons.userGrades)
  coupons: Coupon[];
}
