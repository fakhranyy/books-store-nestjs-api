import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @Column({
    type: 'enum',
    enum: ['soft cover', 'hard cover'],
  })
  cover: string;
}
