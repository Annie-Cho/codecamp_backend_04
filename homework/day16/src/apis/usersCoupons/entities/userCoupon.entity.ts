import { Coupon } from 'src/apis/coupons/entities/coupon.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class UserCoupon {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  coupon_id: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  public user!: User;

  @ManyToOne(() => Coupon, (coupon) => coupon.id)
  @JoinColumn({ name: 'coupon_id' })
  public coupon!: Coupon;

  @Column()
  isUsed: boolean;
}
