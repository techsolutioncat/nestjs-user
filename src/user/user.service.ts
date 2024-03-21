import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async createUser(userData: Partial<User>): Promise<User> {
        const user = this.userRepository.create(userData);
        return this.userRepository.save(user);
    }

    async getByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({ where: { email } });
    }

    async getLoginData(userData: Partial<User>): Promise<User> {
        return this.userRepository.findOne({ where: userData });
    }
}
