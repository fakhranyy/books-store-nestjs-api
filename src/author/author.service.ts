import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly authorRepo: Repository<Author>,
  ) {}

  async create(createAuthorDto: CreateAuthorDto): Promise<Author> {
    return await this.authorRepo.save(createAuthorDto);
  }

  async findAll(): Promise<Author[]> {
    return await this.authorRepo.find();
  }

  async findOne(id: number): Promise<Author> {
    return await this.authorRepo.findOneBy({ id });
  }

  async update(id: number, updateAuthorDto: UpdateAuthorDto): Promise<Author> {
    const authorToUpdate = await this.authorRepo.findOneBy({ id });
    const updatedAuthor = Object.assign(authorToUpdate, updateAuthorDto);
    return await this.authorRepo.save(updatedAuthor);
  }

  async remove(id: number) {
    return this.authorRepo.delete(id);
  }
}
