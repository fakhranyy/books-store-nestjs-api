import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Book } from '../entities/book.entity';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsEnum(Book)
  cover: string;
}
