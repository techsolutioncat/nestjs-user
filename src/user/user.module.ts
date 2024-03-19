import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), TypeOrmModule.forFeature([User])],
})
export class UserModule {}