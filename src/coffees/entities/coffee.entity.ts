import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity()
export class Coffee {
  @PrimaryGeneratedColumn()
  readonly id: number;
  @Column()
  readonly name: string;
  @Column()
  readonly brand: string;
  @Column({ default: 0 })
  recommendations: number;
  @JoinTable()
  @ManyToMany(() => Flavor, (flavor) => flavor.coffees, { cascade: true })
  readonly flavors: Flavor[];
}
