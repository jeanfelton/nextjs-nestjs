import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { createUserDto } from '../shared/DTO/User/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async findOne(id: number): Promise<User> {
    return this.userRepo.findOne(id);
  }

  async findMany(options: FindManyOptions<User> = {}): Promise<Array<User>> {
    return this.userRepo.find(options);
  }

  async create(user: createUserDto): Promise<User> {
    const entity = this.userRepo.create(user);
    return this.userRepo.save(entity);
  }

  async findUser(email: string, password: string): Promise<User | undefined> {  
    const cond = {where:{email:email, password:password }}
    return this.userRepo.findOne(cond);
  }

}
