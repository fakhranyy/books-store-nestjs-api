import { Book } from 'src/book/entities/book.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'authors' })
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  firstName: string;

  @Column({ unique: true })
  lastName: string;

  @Column()
  nationality: string;

  @Column({ default: 'default-avatar.png' })
  image: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[]
}
