import { MainCategory } from 'src/apis/mainCategories/entities/mainCategory.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SubCategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 20 })
  name: string;

  @ManyToOne(() => MainCategory)
  mainId: MainCategory;
}
