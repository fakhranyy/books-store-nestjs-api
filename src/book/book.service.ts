import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorService } from 'src/author/author.service';
import { Author } from 'src/author/entities/author.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    private readonly authorSrv: AuthorService,
  ) {}

  async create(id: number, createBookDto: CreateBookDto): Promise<Book> {
    const newBook = new Book();
    const author = await this.authorSrv.findOne(+id);
    newBook.author = author;
    Object.assign(newBook, createBookDto);
    console.log(newBook.author);
    return await this.bookRepo.save(newBook);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepo.find();
  }
  
 async findBooksByAuthor(id: number):Promise<Author[]>{
  return await this.authorSrv.findAllAuthorBooks(id)
  }

  async findOne(id: number): Promise<Book> {
    return await this.bookRepo.findOneBy({ id });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepo.findOneBy({ id });
    Object.assign(book, updateBookDto);
    return await this.bookRepo.save(book);
  }

  async remove(id: number) {
    return await this.bookRepo.delete(id);
  }
}
