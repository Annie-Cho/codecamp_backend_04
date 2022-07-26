import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MainCategory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 10 })
  name: string;
}
