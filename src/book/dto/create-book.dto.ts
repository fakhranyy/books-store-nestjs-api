import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Book } from '../entities/book.entity';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  @Length(5, 10)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 200)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @IsNotEmpty()
  @IsEnum(Book)
  cover: string;
}
