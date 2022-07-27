import { Field, ObjectType } from '@nestjs/graphql';
import { Food } from 'src/apis/foods/entities/food.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Image {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 200 })
  @Field(() => String)
  url: string;

  @Column()
  @Field(() => Boolean)
  isMain: boolean;

  @ManyToOne(() => Food)
  @Field(() => Food)
  foodId: Food;
}
