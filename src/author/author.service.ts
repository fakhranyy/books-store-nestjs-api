import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';
import { Book } from 'src/book/entities/book.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly authorRepo: Repository<Author>,
    @InjectRepository(Book) private readonly bookRepo: Repository<Author>,

  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorRepo.save(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepo.find();
  }

  async findAllAuthorBooks(id: number): Promise<Author[]> {
    const author = await this.authorRepo.findOneBy({id})
    return await this.bookRepo.find({where: {books: author.books}})
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorRepo.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const authorToUpdate = await this.authorRepo.findOneBy({ id });
    Object.assign(authorToUpdate, updateAuthorDto);
    return await this.authorRepo.save(authorToUpdate);
  }

  async remove(id: number) {
    return this.authorRepo.delete(id);
  }
}
