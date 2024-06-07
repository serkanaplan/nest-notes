import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './Entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOneBy({ id });
    }

    async create(userdto: CreateUserDto): Promise<User> {
        const entity = new User();
        Object.assign(entity, userdto);
        return await this.userRepository.save(userdto);
    }

    async createAll(users: CreateUserDto[]): Promise<User[]> {
        const createdUsers =[];
        for(const user of users){
            const entity = new User();
            Object.assign(entity, user);
            createdUsers.push(await this.userRepository.save(user));
        }
        return createdUsers;
    }

    async update(id: number, userDto: UpdateUserDto): Promise<void> {
        await this.userRepository.update(id, userDto);
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
