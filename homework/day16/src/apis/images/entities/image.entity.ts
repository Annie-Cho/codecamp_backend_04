import { Food } from 'src/apis/foods/entities/food.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 200 })
  url: string;

  @Column()
  isMain: boolean;

  @ManyToOne(() => Food)
  foodId: Food;
}
