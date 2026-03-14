import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly name: string;
  @Column()
  readonly brand: string;
  @Column('json', { nullable: true })
  readonly flavors: string[];
}
