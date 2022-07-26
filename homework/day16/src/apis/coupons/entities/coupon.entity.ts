import { User } from 'src/apis/users/entities/user.entity';
import { UserGrade } from 'src/apis/usersGrades/entities/userGrade.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 100 })
  desc: string;

  @ManyToMany(() => UserGrade, (userGrades) => userGrades.coupons)
  userGrades: UserGrade[];
}
