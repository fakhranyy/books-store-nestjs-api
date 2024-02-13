import { Author } from 'src/author/entities/author.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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

  @ManyToOne(() => Author, (author) => author.books, {eager: true})
  author: Author;
}
