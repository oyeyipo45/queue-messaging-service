import { number } from 'joi';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;
}
