import { Field, ObjectType } from '@nestjs/graphql';
import { MainCategory } from 'src/apis/mainCategories/entities/mainCategory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class SubCategory {
  @PrimaryGeneratedColumn()
  @Field(() => String)
  id: string;

  @Column({ type: 'varchar', length: 20 })
  @Field(() => String)
  name: string;

  @ManyToOne(() => MainCategory)
  @Field(() => MainCategory)
  mainId: MainCategory;
}
