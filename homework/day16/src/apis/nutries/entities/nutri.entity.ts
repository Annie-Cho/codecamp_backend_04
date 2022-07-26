import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Nutri {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'varchar', length: 4 })
  name: string;
}
