import { Food } from 'src/apis/foods/entities/food.entity';
import { Nutri } from 'src/apis/nutries/entities/nutri.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class FoodNutri {
  @PrimaryColumn()
  nutri_id: string;

  @PrimaryColumn()
  food_id: string;

  @ManyToOne((type) => Nutri, (nutri) => nutri.id)
  @JoinColumn({ name: 'nutri_id' })
  public nutri!: Nutri;

  @ManyToOne((type) => Food, (food) => food.id)
  @JoinColumn({ name: 'food_id' })
  public food!: Food;

  @Column()
  weight: number;
}
