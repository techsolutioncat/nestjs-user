import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../config/database.config';
import { User } from '../user/user.entity';
import { MiddlewareController } from './middleware.controller';
import { MiddleareService } from './middleware.service';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), TypeOrmModule.forFeature([User])],
  controllers: [MiddlewareController],
  providers: [MiddleareService],
})
export class MiddlewareModule {}