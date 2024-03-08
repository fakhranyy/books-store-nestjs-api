import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post(':id')
  create(@Param('id') id:string, @Body() createBookDto: CreateBookDto) {
    return this.bookService.create(+id , createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();  
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Get('/author/:id')
  findBooksByAuthor(@Param('id') id: string) {
    return this.bookService.findBooksByAuthor(+id);
  }
  
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
