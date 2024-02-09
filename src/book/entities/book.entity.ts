import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Min } from 'class-validator';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: ['soft cover', 'hard cover'],
  })
  cover: string;
}
