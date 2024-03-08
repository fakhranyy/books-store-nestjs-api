import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async register(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    Object.assign(newUser, createUserDto);
    return await this.userRepo.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne(email: string): Promise<User> {
    return await this.userRepo.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepo.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.findOneBy({ id });
    Object.assign(user, updateUserDto);
    return await this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
